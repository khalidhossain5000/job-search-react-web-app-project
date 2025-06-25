import React from 'react';
import hero1 from '../../assets/hero-section-image.png'
import CubeAnimate from '../MotionDevAnimation/CubeAnimate';
import SquareAnimation from '../MotionDevAnimation/SquareAnimation';
import SquareAnother from '../MotionDevAnimation/SquareAnother';

const Banner = () => {
    return (
        <div className='lg:relative bg-gradient-to-b from-[#e4f2fe] to-[#ffeefe]'>
            <div className="container mx-auto lg:flex items-center justify-between">
                <div className="text-center lg:text-left content lg:w-[50%]">
                    <h3 className='text-[#8649d5] font-medium lg:mb-5 mb-2 pt-3 lg:pt-0'>Lets start your careers here!</h3>
                    <h1 style={{ lineHeight: '66px' }} className='my-5 text-6xl font-bold text-[#334155]'>Find the dream <span className='text-pink-600'>Job</span> that suit your talent <span className='text-pink-600'>here</span></h1>
                    <p style={{ lineHeight: '30px' }} className='text-[17px] text-[#64748b] '><span className='font-bold text-gray-600'>Job Circle</span> is an innovative and user-friendly website designed to help job seekers explore a wide variety of job opportunities across multiple companies. The platform serves as a centralized hub where users can easily find job listings from different companies, review the job criteria, and determine whether they meet the qualifications before applying.</p>

                </div>
                <div className="image lg:w-[50%]">
                    <img className='w-full' src={hero1} alt="" />
                </div>

                <div className="animation-1 absolute hidden  lg:block lg:top-12 lg:right-6" >
                    <CubeAnimate />
                </div> 
                <div className="animation-1.1 absolute hidden lg:block lg:top-12 lg:left-6" >
                    <SquareAnother/>
                </div>
               
                <div className="animation-3 absolute lg:block bottom-0 -left-16">
                    <SquareAnimation/>
                </div>
            </div>
        </div>
    );
};

export default Banner;