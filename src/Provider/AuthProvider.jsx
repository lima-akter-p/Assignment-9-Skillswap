import React, {  useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { AuthContex } from './AuthContex';



const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);

    const [loader, setLoader] = useState(true)


    const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);

    };
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    };
    const updateUser = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData)

    };
   
   

    



    const logOut =() =>{
        return signOut(auth);
    };

    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoader(false)

        });
        return ()=>{
            unsubscribe();

        };
    },[]);
    const authData = {
        loader,
        setLoader,
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        updateUser
        
    };
  return <AuthContex value={authData}>{children}</AuthContex>;
       

};

export default AuthProvider;