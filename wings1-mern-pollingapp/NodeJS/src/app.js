const express = require("express");
const cors = require("cors");
const pollsRouter = require("./routers/polls");
require("./mongoose/db"); // initialize DB connection

const app = express();

app.use(cors());
app.use(express.json());

app.use("/polls", pollsRouter);

// For testing and external usage
const PORT = process.env.PORT || 8001;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
