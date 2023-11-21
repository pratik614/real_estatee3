import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const defaultLogin = {
    email: '',
    password: '',
};
const Login = () => {
    const [login, setLogin] = useState(defaultLogin);

    const changeFunction=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    };

    const formSubmit=(e)=>{
        e.preventDefault();
        console.log(login)
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
