const express = require("express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist"));
  });
  app.use((req, res, next) => {
    if (req.url.endsWith(".js")) {
      res.type("application/javascript");
    }
    next();
  });
  app.use(express.static(path.join(__dirname, "../dist")));
}

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../dist/index.html"));
// });

app.use(routes);

db.once("open", () => {
  app.listen(PORT, function () {
    console.log(`🌍 Now listening on localhost:${PORT}`);
  });
});
