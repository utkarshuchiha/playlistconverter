const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

(async () => {
    try {
      await mongoose.connect(process.env.MONGOURL);
      console.log("connected to db");
    } catch (err) {
      console.log(err);
    }
  })();
  

  module.exports=mongoose