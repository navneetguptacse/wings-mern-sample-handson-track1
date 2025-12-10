const express = require("express");
const cors = require("cors");
require("dotenv").config();
const ordersRouter = require("./routers/orders");
require("./db/defaultDB");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/orders", ordersRouter);

const PORT = process.env.PORT || 8001;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Orders dashboard backend listening on port ${PORT}`);
  });
}

module.exports = app;
