import express from "express";

const PORT = 3000;

const app = express();

//app.use(express.static("./static"));

app.listen(PORT, () => {
  console.log(`Server run on port http://localhost:${PORT}`);
});
