import React from 'react';


const MyProfile = () => {
    return (
         <div className='flex justify-center min-h-screen items-center'>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                       
                      
                    </div>
                    <div className="card bg-base-100 w-600 max-w-sm shrink-0 shadow-2xl">
                        <form  className="card-body">
                             <h1 className="text-2xl font-bold">My profile</h1>
                             <fieldset className="fieldset">
                            {/* Name */}
                                <label className="label">Name</label>
                                <input type="name" name="name" className="input" placeholder="user name" />
                            {/* email */}
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                            {/* photo */}
                                <label className="label">Photo URL</label>
                                <input type="photo" name="photo" className="input" placeholder="photo URL" />
                                {/* password */}
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                
                                <button type="submit" className="btn btn-neutral mt-4">Update Profile</button>
                            

                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>

        </div>
      
    )
};

export default MyProfile;