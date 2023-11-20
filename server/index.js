import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRouter from "./routes/authRoute.js"

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("db is connected")
}).catch((err) => {
    console.log(err)
});


const app = express();

app.use("/api/user/",authRouter);

app.get("/", (req, res) => {
    res.send("app running fine")
})

app.listen(8000, () => {
    console.log("server is created")
})