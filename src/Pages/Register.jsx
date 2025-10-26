import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContex } from '../Provider/AuthContex';



const Register = () => {
     const navigate = useNavigate()
    const {createUser, setUser} = use(AuthContex);
    const hanldeRegister = (e) =>{
        e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        
        const password = form.password.value;
        console.log({name,email,password,photo});
        createUser(email,password)
        .then((result) => {
            const user = result.user;
            setUser(user);
            navigate("/")
            // console.log(user)

        })
        .catch((error) => {
            const errormessage = error.message;
            alert(errormessage)
        })

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
                                <label className="label">Password</label>
                                <input type="password" className="input" name="password" placeholder="Password" required />
                              
                                <button type="submit" className="btn btn-neutral mt-4">Register</button>
                                <p className='text-xl font-semibold'>Allready Have an account? ? {" "} <Link to="/auth/login">Login</Link></p>

                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;