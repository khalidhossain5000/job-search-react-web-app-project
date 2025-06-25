import React from 'react';
import appImg from '../../assets/app-section-image.jpg'
import { MdContentPasteSearch } from 'react-icons/md';
import { LuUserRound } from 'react-icons/lu';
import { IoNotificationsCircle } from 'react-icons/io5';
import { BsApple } from 'react-icons/bs';
import { FaGooglePlay, FaUser } from 'react-icons/fa';
const DownloadAppSection = () => {
    return (
        <div className='bg-[#fcfdff] py-12 lg:py-26 '>
            <div className="container mx-auto lg:flex items-center justify-between">
                <div className="image lg:w-[50%]">
                    <img className='w-full' src={appImg} alt="" />
                </div>
                <div className="content lg:w-[50%] space-y-6">
                    <h5 className='text-[#1967d2] text-xl text-center lg:text-left'>DOWNLOAD & ENJOY</h5>
                    <h1 className='text-center lg:text-left my-5 text-3xl lg:text-6xl font-semibold text-[#334155] lg:mb-12'>Get the Job Track -Job Search App Now</h1>
                    <div className="icon-contetn lg:mb-7">
                        <h3 className='flex justify-center lg:justify-start items-center gap-3 text-xl font-bold text-[#9e85ee]'><MdContentPasteSearch size={30} /> <span className=' mt-3 text-gray-600'>Job Search</span></h3>
                        <h6 className='text-[#334155] font-medium text-center lg:text-left mt-3 lg:mt-0'>Explore jobs across all industries anytime, anywhere.</h6>
                    </div>                    
                    <div className="icon-contetn lg:mb-7">
                        <h3 className='flex justify-center lg:justify-start items-center gap-3 text-xl font-bold text-[#9e85ee]'><FaUser size={30} /> <span className='text-[#334155] font-semibold'>Search on the go</span></h3>
                        <h6 className=' text-gray-600 text-center lg:text-left mt-3 lg:mt-0'>Explore career options wherever you are.</h6>
                    </div>                    
                    <div className="icon-contetn lg:mb-7">
                     <h3 className='flex justify-center lg:justify-start items-center gap-3 text-xl font-bold'><IoNotificationsCircle fill='#9e85ee' size={30} /> <span className='text-[#334155] font-semibold'>Instant Notifications</span></h3>
                        <h6 className='text-center lg:text-left mt-3 lg:mt-0 text-gray-600'>Get notified as soon as the right job appears.</h6>
                    </div>
                    <div className="space-y-5 lg:space-y-0 button lg:flex gap-6 items-center pt-9">
                        <button className='mx-auto hover:bg-pink-600 transition duration-700 cursor-pointer rounded-xl p-6 bg-[#202124]  text-white flex items-center gap-3'><BsApple size={50}/><h3 className='flex flex-col'><span>Download on the</span> <span className='text-xl font-bold'>App Store</span></h3></button>                         
                        <button className='hover:bg-pink-600 mx-auto transition duration-700 cursor-pointer rounded-xl p-6 bg-[#202124]  text-white flex items-center gap-3'><FaGooglePlay size={50}/><h3 className='flex flex-col'><span>Download on the</span> <span className='text-xl font-bold'>Google Play</span></h3></button>  
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default DownloadAppSection;