import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return  res.status(200).json({
                success: false,
                message: "user already exists , login to continue"
            })
        };
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = { name, email, password: hashedPassword };
        const newUser = new User(user);
        await newUser.save();
        return res.status(201).json({
            success: true,
            message: "user registerd successfully"
        })

    } catch (error) {
      return  res.status(200).json({
            success: false,
            message: "error while user registration"
        })
    }
}

export const userLogin = async (req, res) => {
    try {
        const {email , password} =req.body;
        const existingUser = await User.findOne({email});
        if(!existingUser){
          return  res.status(200).json({
                success:false,
                message:"no user found, register first to continue..."
            })
        };
        const isMatch = await bcrypt.compare(password,existingUser.password);
        if(!isMatch){
           return res.status(200).json({
                success:false,
                message:"incorrect password"
            })
        }
        else{
            const token  = jwt.sign({_id:existingUser._id},process.env.SALT,{
                expiresIn:"5D",
                
            });
            const {password : pass, ...rest} = existingUser._doc;  //not sending pass to frontend

            return res.status(201).json({
                success:true,
                message:"logged in successfully",
                rest,
                data:token
            })
        }


    } catch (error) {
       return res.status(200).json({
            success: false,
            message: "error while user login"
        })
    }
}