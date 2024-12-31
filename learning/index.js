require("dotenv").config()
const express = require("express");
const app = express()

app.get("/", (req, res)=>{
    res.send("Hello world")
})

app.get("/twitter", (req, res)=>{
    res.send("Twiter Page")
})

app.get("/fun",(req, res)=>{
    res.send("Just for fun!!")
})

app.listen(process.env.PORT, ()=>{
    console.log("App listing in 3000");
})