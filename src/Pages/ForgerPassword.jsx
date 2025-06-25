import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router';



const ForgerPassword = () => {
    const { forgetPassword } = use(AuthContext);
    const location=useLocation()
    const [email,setEmail]=useState(location.state?.email || '/')
   useEffect(()=>{
    if(location.state.email){
        setEmail(location.state.email)
    }
   },[location.state.email])
    const handleForgetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if(email){
            forgetPassword(email)
            .then(() => {
                
                toast.error('Reset Link Sent Successfull', {
                    className: 'w-[300px] h-[100px] text-xl font-bold',
                    removeDelay: 1000,
                    iconTheme: {
                        primary: '#16061e',
                        secondary: '#ef54e2',
                    },
                    style: {
                        border: '1px solid black',
                        color: '#fef1ff',
                        backgroundImage: 'linear-gradient(to bottom, #e151de, #16061e)'
                    },
                });
                window.open('https://mail.google.com', '_blank')
            })
            .catch((error) => {
                const errorCode=error.code;
                toast.error(`Opps- ${errorCode}--something went wrong`, {
                    className: 'w-[300px] h-[100px] text-xl font-bold',
                    removeDelay: 1000,
                    iconTheme: {
                        primary: '#16061e',
                        secondary: '#ef54e2',
                    },
                    style: {
                        border: '1px solid black',
                        color: '#fef1ff',
                        backgroundImage: 'linear-gradient(to bottom, #e151de, #16061e)'
                    },
                });
                
                
            })
        }
        else{
            toast.error('Enter a Valid email', {
                className: 'w-[300px] h-[100px] text-xl font-bold',
                removeDelay: 1000,
                iconTheme: {
                    primary: '#16061e',
                    secondary: '#ef54e2',
                },
                style: {
                    border: '1px solid black',
                    color: '#fef1ff',
                    backgroundImage: 'linear-gradient(to bottom, #e151de, #16061e)'
                },
            });
        }
    }
    return (
        <div className='py-24 bg-gradient-to-b from-[#000626] to-[#0e315b]'>
            <div className="container mx-auto text-center">
                <div className="dynamic-title">
                    <Helmet>
                        <title>Forget-Password</title>
                    </Helmet>
                </div>
                <div className="forget-password">
                    <form onSubmit={handleForgetPassword}>
                        <label className="w-9/12 text-left label text-xl text-pink-300">Email</label><br />
                        <input name='email' value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" className=" input w-9/12 bg-[#011133] border border-pink-300 rounded-xl p-8 text-white placeholder:text-pink-200 placeholder:text-xl" placeholder="Email" /><br />
                        <button type='submit' className="btn w-9/12 bg-[#011133] p-8 border-pink-300 text-xl text-pink-100 rounded-xl mt-4 hover:bg-gradient-to-bl hover:from-[#e050de] hover:to-[#5b04ed] transition duration-700">Reset Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgerPassword;