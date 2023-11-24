const express = require("express");
const mongoose = require("./mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
app.listen(process.env.PORT, () => {
  console.log(`server running on server ${process.env.PORT}`);
});

