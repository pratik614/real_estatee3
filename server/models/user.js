import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique
    },
    password:{
        type:String,
        required:true
    }

},{timeStamps:true});

const User  = mongoose.model("user",userSchema)

export default User;