const request = require("supertest");
const app = require("../src/app");
const Order = require("../src/models/order");
const {
  setUpDatabase,
  orderOne,
  orderTwo,
  orderThree,
  orderFour,
  orderFive,
} = require("./utils/testDB");

beforeEach(setUpDatabase);

test("Viewing all the orders", async () => {
  const response = await request(app).get("/orders").expect(200);
  expect(response.body.count).toBe(5);
  expect(response.body.records.length).toBe(5);
  expect(response.body.records[0].customerName).toBe(orderOne.customerName);
  expect(response.body.records[1].customerName).toBe(orderTwo.customerName);
});

test("Filtering orders by status", async () => {
  const response = await request(app)
    .get("/orders?status=PREPARING")
    .expect(200);
  expect(response.body.count).toBe(1);
  expect(response.body.records[0].restaurantName).toBe(orderTwo.restaurantName);
});

test("Filtering orders by min_amount", async () => {
  const response = await request(app).get("/orders?min_amount=20").expect(200);
  expect(response.body.count).toBe(2);
  const amounts = response.body.records.map((r) => r.totalAmount);
  expect(amounts).toEqual(expect.arrayContaining([25.5, 40.0]));
});

test("Filtering orders by max_amount", async () => {
  const response = await request(app).get("/orders?max_amount=15").expect(200);
  expect(response.body.count).toBe(3);
  const names = response.body.records.map((r) => r.customerName);
  expect(names).toEqual(
    expect.arrayContaining([
      orderTwo.customerName,
      orderFour.customerName,
      orderFive.customerName,
    ])
  );
});

test("Combined status and amount filters", async () => {
  const response = await request(app)
    .get("/orders?status=OUT_FOR_DELIVERY&min_amount=30")
    .expect(200);
  expect(response.body.count).toBe(1);
  expect(response.body.records[0]._id).toBe(String(orderThree._id));
});

test("Create a new order with valid payload", async () => {
  const payload = {
    customerName: "Frank Ocean",
    restaurantName: "Noodle House",
    items: "Ramen",
    totalAmount: 18.0,
    estimatedDeliveryMinutes: 20,
  };

  const res = await request(app).post("/orders").send(payload).expect(201);
  expect(res.body.order).toBeDefined();
  expect(res.body.order.status).toBe("PLACED");

  const orderInDb = await Order.findById(res.body.order._id);
  expect(orderInDb).not.toBeNull();
  expect(orderInDb.customerName).toBe(payload.customerName);
});

test("POST should force status to PLACED regardless of input", async () => {
  const payload = {
    customerName: "Gina",
    restaurantName: "Wraps",
    items: "Wrap",
    totalAmount: 10,
    estimatedDeliveryMinutes: 15,
    status: "CANCELLED",
  };

  const res = await request(app).post("/orders").send(payload).expect(201);
  expect(res.body.order.status).toBe("PLACED");
});

test("POST should validate required fields and return 400", async () => {
  await request(app)
    .post("/orders")
    .send({ customerName: "OnlyName" })
    .expect(400);
});

test("PATCH updateStatus allowed transition", async () => {
  // orderOne is PLACED -> allow PREPARING
  await request(app)
    .patch(`/orders/updateStatus/${orderOne._id}`)
    .send({ status: "PREPARING" })
    .expect(200);

  const updated = await Order.findById(orderOne._id);
  expect(updated.status).toBe("PREPARING");
});

test("PATCH updateStatus invalid transition should return 400", async () => {
  // orderFour is DELIVERED - no further transitions allowed
  await request(app)
    .patch(`/orders/updateStatus/${orderFour._id}`)
    .send({ status: "PREPARING" })
    .expect(400);
});

test("PATCH markDelayed allowed statuses", async () => {
  // orderTwo is PREPARING
  await request(app).patch(`/orders/markDelayed/${orderTwo._id}`).expect(200);
  const updated = await Order.findById(orderTwo._id);
  expect(updated.isDelayed).toBe(true);
});

test("PATCH markDelayed disallowed status returns 400", async () => {
  // orderFour is DELIVERED
  await request(app).patch(`/orders/markDelayed/${orderFour._id}`).expect(400);
});

test("GET with invalid status filter returns 400", async () => {
  await request(app).get("/orders?status=INVALID_STATUS").expect(400);
});

test("POST rejects customerName containing apostrophe (validation)", async () => {
  await request(app)
    .post("/orders")
    .send({
      customerName: "O'Connor",
      restaurantName: "Test Resto",
      items: "Sample",
      totalAmount: 10,
      estimatedDeliveryMinutes: 20,
    })
    .expect(400);
});

test("POST rejects negative totalAmount", async () => {
  await request(app)
    .post("/orders")
    .send({
      customerName: "Helen",
      restaurantName: "Test Resto",
      items: "Sample",
      totalAmount: -5,
      estimatedDeliveryMinutes: 20,
    })
    .expect(400);
});

test("POST rejects estimatedDeliveryMinutes out of range", async () => {
  await request(app)
    .post("/orders")
    .send({
      customerName: "Isaac",
      restaurantName: "Test Resto",
      items: "Sample",
      totalAmount: 12,
      estimatedDeliveryMinutes: 5,
    })
    .expect(400);
});

test("PATCH updateStatus: allow cancelling from PREPARING", async () => {
  // orderTwo is PREPARING -> allow CANCELLED
  await request(app)
    .patch(`/orders/updateStatus/${orderTwo._id}`)
    .send({ status: "CANCELLED" })
    .expect(200);

  const updated = await Order.findById(orderTwo._id);
  expect(updated.status).toBe("CANCELLED");
});

test("PATCH updateStatus to same status should return 400", async () => {
  // orderThree is OUT_FOR_DELIVERY; attempting to set same status
  await request(app)
    .patch(`/orders/updateStatus/${orderThree._id}`)
    .send({ status: "OUT_FOR_DELIVERY" })
    .expect(400);
});

test("PATCH markDelayed for OUT_FOR_DELIVERY sets isDelayed true", async () => {
  // orderThree is OUT_FOR_DELIVERY
  await request(app).patch(`/orders/markDelayed/${orderThree._id}`).expect(200);
  const updated = await Order.findById(orderThree._id);
  expect(updated.isDelayed).toBe(true);
});

test("PATCH updateStatus with invalid ObjectId returns 400", async () => {
  await request(app)
    .patch(`/orders/updateStatus/invalid-id`)
    .send({ status: "PREPARING" })
    .expect(400);
});
