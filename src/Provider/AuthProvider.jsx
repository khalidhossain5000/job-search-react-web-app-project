import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    // create user
    const registerUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //login user
    const logInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    //google register/log in
    const googleLogIn=()=>{
        return signInWithPopup(auth,provider);
    } 
    //UPDATE PROFILE 
    const updateUserProfile=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }

    // forget password starts
    const forgetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    //sign out/log out user start-->
    const logOut=()=>{
        return signOut(auth);
    }
    // on auth state change start keeping existing user data observer
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe()
        }
    },[])
    const authData={
        setUser,
        user,
        registerUser,
        logInUser,
        googleLogIn,
        updateUserProfile,
        loading,
        setLoading,
        forgetPassword,
        logOut
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;