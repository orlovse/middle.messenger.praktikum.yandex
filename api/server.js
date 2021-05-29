import express from "express";

const PORT = 3000;

const http = require("http");
const app = express();

app.use(express.static("./dist"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./dist/index.html");
});

app.listen(PORT, () => {
  console.log(`Server run on port http://localhost:${PORT}`);
});
