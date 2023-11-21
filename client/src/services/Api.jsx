import axios from "axios";


export const registerPage =async(data)=>{
    try {
        return await axios.post("http://localhost:8000/api/auth/register",data)  
    } catch (error) {
        return console.log(error);
    }

}
export const loginPage= async(data)=>{
    try {
        return await axios.post("http://localhost:8000/api/auth/login",data)
    } catch (error) {
        return console.log(error);
    }
}