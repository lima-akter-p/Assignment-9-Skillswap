import React from 'react';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';


const AuthLayout = () => {
    return (
        <div className='bg-base-300 min-h-screen'>
            <Navber></Navber>
            
            <main className='w-11/12 mx-auto py-5'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>

            
        </div>
    );
};

export default AuthLayout;