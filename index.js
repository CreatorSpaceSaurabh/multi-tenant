require("dotenv").config({ path: __dirname + ".env" });

const express = require("express");
const app = express(),
  cors = require("cors"),
  http = require("http"),
  bodyParser = require("body-parser");
global.mongoose = require("mongoose");

// create connection with mongoDB server
require("./config/mongo.config");

// CORS Options
const corsOptions = {
  origin: "*",
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: [
    "X-Requested-With",
    "Content-type",
    "Authorization",
    "token",
  ],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
const port = process.env.PORT || 3000;

// creating multi tenant connections
const tenantUtil = require("./utilility/tenant.util");
tenantUtil.createConnectionPool();

// create http server
const server = http.createServer(app);
module.exports = server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
