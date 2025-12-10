const mongoose = require("mongoose");
const Order = require("../../src/models/order");

const orderOneId = new mongoose.Types.ObjectId();
const orderTwoId = new mongoose.Types.ObjectId();
const orderThreeId = new mongoose.Types.ObjectId();
const orderFourId = new mongoose.Types.ObjectId();
const orderFiveId = new mongoose.Types.ObjectId();

const orderOne = {
  _id: orderOneId,
  customerName: "Alice Smith",
  restaurantName: "Pasta Place",
  items: "Pasta, Salad",
  totalAmount: 25.5,
  status: "PLACED",
  estimatedDeliveryMinutes: 30,
  isDelayed: false,
};

const orderTwo = {
  _id: orderTwoId,
  customerName: "Bob Jones",
  restaurantName: "Burger Barn",
  items: "Burger, Fries",
  totalAmount: 15.0,
  status: "PREPARING",
  estimatedDeliveryMinutes: 25,
  isDelayed: false,
};

const orderThree = {
  _id: orderThreeId,
  customerName: "Carol White",
  restaurantName: "Sushi Spot",
  items: "Sushi Platter",
  totalAmount: 40.0,
  status: "OUT_FOR_DELIVERY",
  estimatedDeliveryMinutes: 45,
  isDelayed: false,
};

const orderFour = {
  _id: orderFourId,
  customerName: "David Green",
  restaurantName: "Taco Town",
  items: "Tacos x3",
  totalAmount: 12.0,
  status: "DELIVERED",
  estimatedDeliveryMinutes: 20,
  isDelayed: false,
};

const orderFive = {
  _id: orderFiveId,
  customerName: "Eve Black",
  restaurantName: "Salad Shack",
  items: "Caesar Salad",
  totalAmount: 9.5,
  status: "CANCELLED",
  estimatedDeliveryMinutes: 15,
  isDelayed: false,
};

const setUpDatabase = async () => {
  await Order.deleteMany();
  await new Order(orderOne).save();
  await new Order(orderTwo).save();
  await new Order(orderThree).save();
  await new Order(orderFour).save();
  await new Order(orderFive).save();
};

module.exports = {
  orderOne,
  orderTwo,
  orderThree,
  orderFour,
  orderFive,
  setUpDatabase,
};
