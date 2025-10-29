import React, { use, useState } from 'react';

import { Link, Navigate, NavLink } from 'react-router';

import { AuthContex } from '../Provider/AuthContex';



const Navber = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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





    return (<nav className="w-11/12 mx-auto bg-gray-50 flex justify-between items-center shadow-sm p-5 relative">
        {/* Left Logo */}
        <div>
            <h2 className="text-xl font-bold text-violet-700">
                Skill<span className="text-pink-700">S</span>wap
            </h2>
        </div>

        {/* Middle menu (hide on small) */}
        <div className="hidden md:flex gap-10">
            <NavLink to="/" className="hover:underline hover:text-blue-600">
                Home
            </NavLink>
            <NavLink to="/skills" className="hover:underline hover:text-blue-600">
                SkillDetails
            </NavLink>
            <NavLink to="/profile" className="hover:underline hover:text-blue-600">
                My Profile
            </NavLink>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
            {/* Profile & Logout — always visible, even on small device */}
            {user ? (
                <div className="flex items-center gap-2">
                    <img
                        className="w-10 h-10 rounded-full border"
                        src={user.photoURL}
                        alt="profile"
                    />
                    <button
                        onClick={handleLogout}
                        className="btn btn-primary text-sm px-3 py-1"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <Link to="/auth/login" className="btn btn-primary text-sm px-3 py-1">
                    Login
                </Link>
            )}

            {/* Hamburger (visible only on small) */}
            <button
                className="md:hidden text-2xl ml-2"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
            <div className="absolute top-20 right-0 bg-white border shadow-md p-4 flex flex-col gap-3 rounded-md md:hidden z-50">
                <NavLink
                    to="/"
                    className="hover:underline hover:text-blue-600"
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/skills"
                    className="hover:underline hover:text-blue-600"
                    onClick={() => setMenuOpen(false)}
                >
                    SkillDetails
                </NavLink>
                <NavLink
                    to="/profile"
                    className="hover:underline hover:text-blue-600"
                    onClick={() => setMenuOpen(false)}
                >
                    My Profile
                </NavLink>
            </div>
        )}
    </nav>


   
    );
};

export default Navber;