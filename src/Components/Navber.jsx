import React, { use } from 'react';

import { Link, Navigate, NavLink } from 'react-router';
import userImg from '..//assets/user.png'
import { AuthContex } from '../Provider/AuthContex';



const Navber = () => {
    const { user, logOut } = use(AuthContex);
    const handleLogout = () => {
        console.log('user trying to logout');
        logOut()
            .then(() => {
                alert('You logged Out successfully');
            })
            .catch((error) => {
                console.log(error);
            });
    }     
   
    return (
        <div className='w-11/12 mx-auto flex justify-between  shadow-sm p-5'>

            <div>
                <h2 className='text-xl font-bold text-violet-700'>Skill<span className='text-pink-700'>S</span>wap</h2>
            </div>
            <div className='flex gap-10'>
                <NavLink to="/" className="hover:underline hover:text-blue-600">Home</NavLink>
                <NavLink to="/skills" className="hover:underline hover:text-blue-600">SkillDetails</NavLink>
                <NavLink to="/profile" className="hover:underline hover:text-blue-600">My Profile</NavLink>

            </div>

            <div>
            <button
               
             className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
              Sign in with Google
              </button>
            </div>
             
            

           
            <div className='login-button flex gap-3'>
                <img src={userImg} alt="" />
                {
                    user ? <button onClick={handleLogout} className='btn btn-primary'>Logout</button> : <Link to="/auth/login" className='btn btn-primary'>Login</Link>
                }



            </div>
            {user && user.email}

        </div>
    );
};

export default Navber;