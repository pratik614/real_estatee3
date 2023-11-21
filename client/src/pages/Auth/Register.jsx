import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { registerPage } from '../../services/Api';

const defaultRegister = {
  name: '',
  email: '',
  password: '',
};

const Register = () => {
  const [register, setRegister] = useState(defaultRegister);
  const navigate = useNavigate();

  const changeFunction = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const formSubmit =  async(e) => {
    e.preventDefault();
    try {
       let response = await registerPage(register);
       console.log(response.data.success); 
       if(response.data.success===true){
        toast.success(response.data.message);
         navigate("/login");
       }
       else{
        toast.error(response.data.message)
       }
    } catch (error) {
        
    }
  };

  return (
    <div className='mx-auto max-w-lg p-3'>
      <h1 className='text-center my-7 text-4xl text-red-600 semi-bold '>Register page</h1>
      <form className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='enter your name'
          required
          className='p-4 rounded-xl border placeholder-red-900'
          onChange={changeFunction}
          name='name'
        />
        <input
          type='email'
          placeholder='email'
          required
          className=' p-4 rounded-xl border placeholder-red-900'
          onChange={changeFunction}
          name='email'
        />
        <input
          type='password'
          placeholder='*********'
          className=' p-4 rounded-xl border placeholder-red-900'
          onChange={changeFunction}
          name='password'
        />
      </form>
      <div className='flex items-center justify-center'>
      <button
        type='submit'
        className='my-5 uppercase rounded-lg p-4 bg-slate-200 text-red-600 w-40 hover:bg-red-600 hover:text-slate-200'
        onClick={formSubmit}
      >
        register
      </button>
      </div>
      
      <p className='text-center'>
        alredy have an account?{' '}
        <span className='text-red-600 hover:text-slate-400'>
          <Link to={'/login'}>clik here to login</Link>
        </span>
      </p>
    </div>
  );
};

export default Register;
