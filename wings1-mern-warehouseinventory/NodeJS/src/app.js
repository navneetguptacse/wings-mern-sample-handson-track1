const express = require("express");
const cors = require("cors");
require("./mongoose/db"); // DB connection

const inventoryRouter = require("./routers/inventory");
const requestsRouter = require("./routers/requests");

const app = express();

// app.use(cors());
app.use(express.json());

app.use("/inventory", inventoryRouter);
app.use("/requests", requestsRouter);
app.get("/", (req, res) => {
  return res.json({ message: "Warehouse API Running" });
});

const PORT = process.env.PORT || 8001;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Warehouse API server running on port ${PORT}`);
  });
}

module.exports = app;
