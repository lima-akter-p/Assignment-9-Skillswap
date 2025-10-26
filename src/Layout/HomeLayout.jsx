import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Components/Navber';


const HomeLayout = () => {
    return (
        <div>
          
            <Navber></Navber>
              

          <main className='main '>
            <Outlet></Outlet>
           

          </main>

          <footer>

          </footer>
        </div>
    );
};

export default HomeLayout;