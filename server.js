import express from 'express'
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const current = fileURLToPath(import.meta.url);
const __dirname = path.dirname(current);

app.use(express.static(__dirname +'/dist'))
app.set("view engine", "hbs");
app.set("views", path.resolve(__dirname + '/dist'));
app.get("*", (req, res) => {
  res.status(200).sendFile("/dist/index.html", {
    root: __dirname + "/"
  });
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

