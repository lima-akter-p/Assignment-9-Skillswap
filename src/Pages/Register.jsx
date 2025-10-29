import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContex } from '../Provider/AuthContex';
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';



const Register = () => {
     const navigate = useNavigate()
     const [error,setError] = useState('')
     const [showpassword,setShowpassword] = useState(false)
    const {createUser, updateUser} = use(AuthContex);
    const hanldeRegister = (e) =>{
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const updated = {displayName:name,photoURL:photo};
        
        const password = form.password.value;
        // console.log({name,email,password,photo});
        const passwordPettern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if(!passwordPettern.test(password)){
            console.log('password didn match')
           setError('Password must be at least 6 character include one uppercase and lowercase')
            return;


        }


        createUser(email,password)
        .then(() => {
          
            return  updateUser(updated)
            
         
            // console.log(user)

        })
        .then(() =>{
            toast('Register successful')
            navigate("/")
        })
        .catch((error) => {
            const errormessage = error.message;
            setError(errormessage)
        })

    }
        const handleTogglePassword = (event) =>{
            event.preventDefault();
            setShowpassword(!showpassword)
        }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                       
                      
                    </div>
                    <div className="card bg-base-100 w-600 max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={hanldeRegister} className="card-body">
                             <h1 className="text-2xl font-bold">Register Your Account</h1>
                            <fieldset className="fieldset">
                                {/* Name */}
                                <label className="label">Name</label>
                                <input type="Name" name="name" className="input" placeholder="Name" required />
                                {/* Email */}
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" required />
                                 {/* photo */}
                                <label className="label">photo URL</label>
                                <input type="photo" name="photo" className="input" placeholder="photo url" required />
                                {/* password */}
                                <div className='relative'>
                                <label className="label">Password</label>
                                <input type={showpassword?'text':'password'} className="input" name="password" placeholder="Password" required />
                                <button 
                                onClick={ handleTogglePassword}
                                className="btn btn-xs absolute top-6 right-5">
                                 {showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                </button>
                                </div>
                              
                                <button type="submit" className="btn btn-neutral mt-4">Register</button>
                                <p className='text-xl font-semibold'>Allready Have an account? ? {" "} <Link to="/auth/login">Login</Link></p>

                            </fieldset>
                            {
                               error && <p className='text-red-600'>{error}</p> 
                            }
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;