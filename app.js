require("./config/config");
require("./models/db");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const rtsIndex = require("./router/index.router");
var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api", rtsIndex);

app.listen(process.env.PORT, () => {
  console.log(`server started at: ${process.env.PORT}`);
});
