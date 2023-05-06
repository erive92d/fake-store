const express = require("express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist")));
  app.get("*", (req, res) => {
    // res.sendFile(path.join(__dirname, "../index.html"));
    // res.sendFile(path.join(__dirname, "/dist/index.html"));
    // res.sendFile(path.join(__dirname, "../dist/index.html"));
    // res.sendFile(path.join(__dirname, "../dist")); <-- API WORKS BUT NOT ROUTING
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});
// app.use(express.static(path.join(__dirname, "dist", "index.html")));

app.use(routes);
const host = "0.0.0.0";

db.once("open", () => {
  app.listen(PORT, function () {
    console.log(`🌍 Now listening on localhost:${PORT}`);
  });
});
