import React from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import { loginPage } from '../../services/Api';

const defaultLogin = {
    email: '',
    password: '',
};
const Login = () => {
    const [login, setLogin] = useState(defaultLogin);
const navigate = useNavigate();
    const changeFunction=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    };

    const formSubmit= async(e)=>{
        e.preventDefault();
        try {
            let response = await loginPage(login)
            if(response.data.success===true){
                localStorage.setItem("token",response.data.data)
                toast.success(response.data.message);
                 navigate("/");
               }
               else{
                toast.error(response.data.message)
               }
        } catch (error) {
           
        }
    }


    return (
        <div className='mx-auto max-w-lg p3'>
            <h1 className='text-center my-7 text-4xl text-red-600 bold'>Login page</h1>
            <form className='flex flex-col gap-4  '>
                <input 
                type={"text"}
                 placeholder="email"
                  className='p-4 rounded-xl border placeholder-red-900'
                   name="email" 
                   onChange={changeFunction}
                   />
                <input 
                type={"text"} 
                placeholder="password" 
                className='p-4 rounded-xl border placeholder-red-900'
                 name="password" 
                 onChange={changeFunction}
                 />
            </form>
            <div className='flex items-center justify-center'>
                <button 
                className='my-5 uppercase rounded-lg p-4 bg-slate-200 text-red-600 w-40 hover:bg-red-600 hover:text-slate-200'
                onClick={formSubmit}
                >
                    Login
                </button>
            </div>

            <p className='text-center'>
                do not have an account?
                <span className='text-red-600 hover:text-slate-400'>
                    <Link to="/register">click here to register..</Link>
                </span>
            </p>
        </div>
    )
}

export default Login
