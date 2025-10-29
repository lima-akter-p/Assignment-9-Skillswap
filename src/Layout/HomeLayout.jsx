import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';



const HomeLayout = () => {
    return (
        <div>
          
            <Navber></Navber>

            
              

          <main className='main '>
            <Outlet></Outlet>
           

          </main>

          <footer>
            <Footer></Footer>

          </footer>
        </div>
    );
};

export default HomeLayout;