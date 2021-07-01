import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3000;
let reqPath = path.join(__dirname, "../dist/index.html");

const app = express();

app.use(app.router);
app.use(express.static("./dist"));

app.get("*", (req, res) => {
  res.sendFile(reqPath);
});

app.listen(PORT, () => {
  console.log(`Server run on port http://localhost:${PORT}`);
});
