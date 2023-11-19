import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className='bg-slate-200 flex justify-between items-center shadow-md p-1 sm:p-4'>

            <h1 className='font-bold text-xl flex items-center '>
                <Link to={"/"}>
                <span className='text-red-600'>Urban</span>
                <span className='text-red-950'>homes</span>
                </Link> 
            </h1>
            <form className=' m-4 pl-10  md:ml-12'>
                <input className='rounded-lg p-2' type='text' placeholder='Search...' />
            </form>
            <div className='  md:flex justify-end '>
                <ul className='flex space-x-6 mr-8 ' >
                    <li className='hidden md:block'><Link to={"/"}>Home</Link></li>
                    <li className='hidden md:block'><Link to={"/about"}>About</Link></li>
                    <li className='hidden md:block'><Link to={"/profile"}>Profile</Link></li>
                    <li><Link to={"/register"}>Register</Link></li>
                </ul>
            </div>
           
           
           
        </header>
    );
};

export default Header;
