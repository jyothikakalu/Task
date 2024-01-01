const mongoose = require("mongoose")

const RegSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPass:{
        type:String,
        required:true                                                                                                                                                                                                                                       
    },
    mobile:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    }

})
const RegModel =mongoose.model("/user",RegSchema)
module.exports=RegModel