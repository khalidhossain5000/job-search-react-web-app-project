import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import { IoDocument, IoSearch } from 'react-icons/io5';

const HowItWork = () => {
    return (
        <div className='py-24 container mx-auto bg-[#fcfdff]'>
            <div className="title text-center">
                <h6 className='text-[#8649d5] font-medium mb-2 pt-3 lg:pt-0 lg:mb-0 text-xl'>How It Work</h6>
                <h2 className='mt-2 text-6xl font-bold text-[#334155]'>Follow Easy 4 Steps</h2>
            </div>
            <div className='py-12 card-container grid lg:grid-cols-4 items-center gap-9 mt-12'>

                {/* single card container-1 */}
                <div className='bg-white p-8 rounded-xl shadow-md text-center group overflow-hidden hover:shadow-xl transition-all duration-100 relative'>
                    {/* background overlay on hover */}
                    <div className='absolute inset-0 bg-[#2e54fa] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-700 z-0'></div>
                    {/* card content */}
                    <div className='relative z-10'>
                        {/* icon */}
                        <div className='flex justify-center bg-[#2e54fa] w-[66px] h-[66px] rounded-md text-white items-center mx-auto mb-5 group-hover:bg-white group-hover:text-pink-500'>
                            <IoSearch size={35} />
                        </div>
                        {/* title */}
                        <h2 className='text-[#334155] text-2xl font-bold pb-2 group-hover:text-white'>Search Jobs</h2>
                        {/* description */}
                        <p className='text-[#64748b] font-medium group-hover:text-white'>Search your desired job here.Top company offering your dream job.</p>
                    </div>
                </div>
                {/* single card container-2 */}
                <div className='bg-white p-8 rounded-xl shadow-md text-center group overflow-hidden hover:shadow-xl transition-all duration-100 relative'>
                    {/* background overlay on hover */}
                    <div className='absolute inset-0 bg-[#2e54fa] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-700 z-0'></div>
                    {/* card content */}
                    <div className='relative z-10'>
                        {/* icon */}
                        <div className='flex justify-center bg-[#2e54fa] w-[66px] h-[66px] rounded-md text-white items-center mx-auto mb-5 group-hover:bg-white group-hover:text-pink-300'>
                            <IoDocument size={35} />
                        </div>
                        {/* title */}
                        <h2 className='text-[#334155] text-2xl font-bold pb-2 group-hover:text-white'>Cv/Resume</h2>
                        {/* description */}
                        <p className='text-[#64748b] font-medium group-hover:text-white'>After search make your cv/resume to show company your details</p>
                    </div>
                </div>
                {/* single card container-3 */}
                <div className='bg-white p-8 rounded-xl shadow-md text-center group overflow-hidden hover:shadow-xl transition-all duration-100 relative'>
                    {/* background overlay on hover */}
                    <div className='absolute inset-0 bg-[#2e54fa] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-700 z-0'></div>
                    {/* card content */}
                    <div className='relative z-10'>
                        {/* icon */}
                        <div className='flex justify-center bg-[#2e54fa] w-[66px] h-[66px] rounded-md text-white items-center mx-auto mb-5 group-hover:bg-white group-hover:text-pink-500'>
                            <FaUserPlus size={35} />
                        </div>
                        {/* title */}
                        <h2 className='text-[#334155] text-2xl font-bold pb-2 group-hover:text-white'>Create Account</h2>
                        {/* description */}
                        <p className='text-[#64748b] font-medium group-hover:text-white'>To see details about job just create an account and update your profile.</p>
                    </div>
                </div>
                {/* single card container-4 */}
                <div className='bg-white p-8 rounded-xl shadow-md text-center group overflow-hidden hover:shadow-xl transition-all duration-100 relative'>
                    {/* background overlay on hover */}
                    <div className='absolute inset-0 bg-[#2e54fa] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-700 z-0'></div>
                    {/* card content */}
                    <div className='relative z-10'>
                        {/* icon */}
                        <div className='flex justify-center bg-[#2e54fa] w-[66px] h-[66px] rounded-md text-white items-center mx-auto mb-5 group-hover:bg-white group-hover:text-pink-500'>
                            <FiCheckCircle size={35} />
                        </div>
                        {/* title */}
                        <h2 className='text-[#334155] text-2xl font-bold pb-2 group-hover:text-white'>Apply Them</h2>
                        {/* description */}
                        <p className='text-[#64748b] font-medium group-hover:text-white'>After that just Apply for your dream job and start your carrer.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWork;