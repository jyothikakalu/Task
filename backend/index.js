const express = require("express")

const dbConnect= require("./db/DbConnect")
const RegRouter = require("./Routers/RegRoutes")
const cors= require("cors")

//port and hostname
const PORT=5000
const hostName="127.0.0.1"

//server
const app=express()
app.use(express.json())

app.use(cors())

//Routes
app.use("/user",RegRouter)

app.listen(PORT,hostName,  async()=>{
    await dbConnect()
     console.log(`server started at http://${hostName}:${PORT} and db connected`);
 })