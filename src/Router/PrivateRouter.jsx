import React, { useContext } from 'react';
import { AuthContex } from '../Provider/AuthContex';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
    const {loader,user} = useContext(AuthContex)
    const location = useLocation()
    if(loader) return
    if(!user){
        return <Navigate to= "/auth/login" state={{from:location}} replace></Navigate>
    }
        
    

    return children

 
};

export default PrivateRouter;