const express = require("express");
const cors = require("cors");
const booksRouter = require("./routers/books");
require("./db/defaultDB"); // initialize DB + seed data

const app = express();

app.use(cors());
app.use(express.json());

app.use("/books", booksRouter);

const PORT = process.env.PORT || 8001;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Library backend listening on port ${PORT}`);
  });
}

module.exports = app;
