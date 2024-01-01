const mongoose = require("mongoose")

const dbConnect = async () => {
   try {
      mongoose.connect("mongodb://127.0.0.1:27017/Regmanagememt")

   }
   catch (error) {
      console.log("Something went wrong in db")
   }
}
module.exports = dbConnect