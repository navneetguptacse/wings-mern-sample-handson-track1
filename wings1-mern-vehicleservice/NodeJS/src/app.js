const express = require("express");
const cors = require("cors");
require("./db/defaultDB");
const servicesRouter = require("./routers/services");

const app = express();

app.use(cors());
app.use(express.json());

// root route
app.get("/", (req, res) => {
  res.json({ message: "Vehicle Service Booking API" });
});

// service routes
app.use("/services", servicesRouter);

const PORT = process.env.PORT || 8001;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
