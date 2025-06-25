import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';

import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';


const MyProfile = () => {
    const { user, logOut } = use(AuthContext);
    
    
    const handleLogOut = () => {
        logOut()
            .then(() => {
    
                toast.error('Log Out Successfull', {
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
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className='py-24 px-2 lg:px-0 bg-gradient-to-b from-[#000626] to-[#0e315b]'>
            <div className="dynamic-title">
                <Helmet>
                    <title>My-Profile</title>
                </Helmet>
            </div>
            <div className="title pt-6 lg:pt-12 ">
                <h1 className='text-7xl text-pink-200 text-center font-semibold pb-9'>My Profile</h1>
            </div>
            {/* user info container  */}
            <div className='gap-5 rounded-xl shadow-3xl lg:flex  bg-gradient-to-bl from-[#0d0518] to-[#674dfb] p-12 container mx-auto mt-6 px-3 lg:px-0'>
                <div className="img p-3 lg:w-[50%] flex ">
                    <img className='w-6/12 mx-auto rounded-xl' src={user?.photoURL} alt="" />
                </div>
                <div className="content lg:w-[50%] p-5">
                    <h1 className='mt-6 lg:mt-0 mx-6 text-center text-5xl font-bold text-[#fffdff]'>User Info:</h1>
                    <div className='mt-11 space-y-6 '>
                        <h3 className='bg-gradient-to-br from-[#011133] to-[#e6007630] border border-pink-100 rounded-xl p-5 lg:p-8 text-white lg:text-2xl '><span className='text-pink-600 lg:text-[26px] mt-9'>Name:</span> {user?.displayName}</h3>
                        <h3 className='bg-gradient-to-br from-[#011133] to-[#e6007630] border border-pink-100 rounded-xl p-5 lg:p-8 text-white lg:text-2xl '>Email: {user?.email}</h3>
                        <div className="lg:flex gap-3 mt-6 ">
                            <button onClick={handleLogOut} className="w-full mb-6 lg:mb-0 lg:w-[50%] btn btn-outline border-2 border-pink-500 p-8 text-white text-2xl font-medium hover:bg-pink-700 hover:text-white">Log Out</button>
                            <Link to='/auth/update-profile' className="lg:w-[50%] btn btn-outline border-2 border-pink-500 p-8 text-white text-2xl font-medium hover:bg-pink-700 hover:text-white">
                                Update Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;