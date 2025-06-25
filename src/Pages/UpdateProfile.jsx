import React, { use } from 'react';

import { AuthContext } from '../Provider/AuthContext';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const UpdateProfile = () => {
    const { setUser, user,updateUserProfile } = use(AuthContext);
    const navigate=useNavigate()
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        //update user profile
        updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo })
                toast.success('User Info Updated Successfully', {
                    className: 'w-[300px] h-[100px] text-xl font-bold',
                    removeDelay: 1000,
                    iconTheme: {
                        primary: '#16061e',
                        secondary: '#ef54e2',
                    },
                    style: {
                        border: '1px solid black',
                        color: 'white',
                        backgroundImage: 'linear-gradient(to bottom,#16061e, #ef54e2)'
                    },
                });
                navigate('/auth/my-profile')
            })
            .catch((error) => {
                console.log(error);
                setUser(user);
            });
        //   update profile ends 
    }
    return (
        <div className='py-24 bg-gradient-to-b from-[#000626] to-[#0e315b]'>
            <div className="container mx-auto text-center">
                <div className="dynamic-title">
                    <Helmet>
                        <title>Update-Profile | Job-Circle</title>
                    </Helmet>
                </div>
                <div className="title pt-6 lg:pt-12 ">
                    <h1 className='text-7xl text-pink-200 text-center font-semibold pb-9'>Update My Profile</h1>
                </div>
                <div className="forget-password container mx-auto">
                    <form onSubmit={handleUpdateProfile}>

                        <input name='name' type="text" className=" input w-9/12 bg-[#011133] border border-pink-300 rounded-xl p-8 text-white placeholder:text-pink-200 placeholder:text-xl mb-6" placeholder="Name" /><br />
                        {/* Name ends */}

                        <input name='photoUrl' type="text" className=" input w-9/12 bg-[#011133] border border-pink-300 rounded-xl p-8 text-white placeholder:text-pink-200 placeholder:text-xl" placeholder="Photo URL" /><br />
                        <button type='submit' className="btn w-9/12 bg-[#011133] p-8 border-pink-300 text-xl text-pink-100 rounded-xl mt-4 hover:bg-gradient-to-bl hover:from-[#e050de] hover:to-[#5b04ed] transition duration-700">Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;