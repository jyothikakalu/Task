const express=require("express")
const { getUser, userSignup, userLogin } = require("../controllers/RegController")

const RegRouter=express.Router()


RegRouter.get("/:token",getUser)

RegRouter.post("/signup",userSignup)

RegRouter.post("./login",userLogin)


module.exports = RegRouter