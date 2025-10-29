import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContex } from '../Provider/AuthContex';
import { FaEye, FaEyeSlash } from 'react-icons/fa';








const Login = () => {
    const [showpassword, setShowpassword] = useState(false);

    const emailRef = useRef();
    const { signIn, createUG } = use(AuthContex);
    const { reset } = use(AuthContex);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const handleLoin = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password });
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                //  console.log(user);
                navigate(from, { replace: true });

               
            })
            .catch((error) => {
                const errormessage = error.massage;
                alert(errormessage);
            });
    };
    const handleTogglePassword = (event) => {
        event.preventDefault();
        setShowpassword(!showpassword)
    };

    const handleForgetPassword = () => {

        const email = emailRef.current.value;
        console.log('forget password', email);
        // sendPasswordResetEmail(auth,email)
        // sendPasswordResetEmail(auth ,email)
        reset(email)
            .then(() => {

                alert('please check your email');
            })
            


    };
    const handleSigninWithGoole = () => {
        createUG()
            .then(() => {
                navigate("/")

            })
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">


                    </div>
                    <div className="card bg-base-100 w-600 max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLoin} className="card-body">
                            <h1 className="text-2xl font-bold">Login Your Account</h1>
                            <fieldset className="fieldset">
                                {/* email */}
                                <label className="label">Email</label>
                                <input type="email"
                                    name="email"
                                    className="input"
                                    ref={emailRef}
                                    placeholder="Email" />
                                {/* password */}
                                <div className='relative'>
                                    <label className="label">Password</label>
                                    <input type={showpassword ? 'text' : 'password'} name="password" className="input" placeholder="Password" />
                                    <button onClick={handleTogglePassword}
                                        className="btn btn-sx absolute top-4 right-4">
                                        {showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                    </button>
                                </div>
                                <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>
                                <button type="submit" className="btn btn-neutral mt-4">Login</button>

                                <div>
                                    <button type="button" onClick={handleSigninWithGoole} 

                                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                                        Sign in with Google
                                    </button>
                                </div>



                                <p className='text-xl font-semibold'>Dont Have an account ? {" "} <Link to="/auth/register">Register</Link></p>

                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;