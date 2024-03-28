require("dotenv").config({ path: __dirname + ".env" });

const express = require("express");
global.express = express;
const app = express(),
  cors = require("cors"),
  http = require("http"),
  bodyParser = require("body-parser");
global.mongoose = require("mongoose");
const utils = require("./utilility/utils");
const constantEnums = require("./constants/constant.enums");
const userEnums = require("./constants/user.enums");
const reponseHandler = require("./helpers/handler");
global.utils = utils;
global.constantEnums = constantEnums;
global.userEnums = userEnums;
global.responseHandler = reponseHandler;
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
const UserRouter = require("./routes/user.route");
tenantUtil.createConnectionPool();
app.use("/api/v1", UserRouter);
// create http server
const server = http.createServer(app);
module.exports = server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
