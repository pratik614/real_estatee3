import express from "express"

const app =express();

app.get("/",(req,res)=>{
    res.send("app running fine")
})

app.listen(8000,()=>{
    console.log("server is created")
})