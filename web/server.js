const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
  res.render("index.html");
});

app.post("/contact", (req, res) => {
  console.log("Form submission:", req.body);
  res.send("<h2>Thanks for contacting us! We’ll reach you soon.</h2>");
});

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
