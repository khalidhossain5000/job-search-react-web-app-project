import React from 'react';
import logo from '../../assets/footer-logo.png'
import { NavLink } from 'react-router';
const Footer = () => {
    return (
        <div className=' bg-gradient-to-bl from-[#c99af4] to-[#0c071b] pt-24'>

            <div className=''>
                <div className="container mx-auto">
                    <div className="py-12 content text-center lg:text-left lg:flex  lg:justify-between">
                        <div className="info ">
                            <img className='mx-auto' src={logo} alt="" />
                            <div className="icon-title mt-6 mx-auto">
                                <h2 className='mt-3 text-xl flex justify-center items-center gap-2 text-[#fef1ff] '><span className='text-2xl font-bold'>Location</span></h2>
                                <p className='text-[#b39dd5] my-3'>Jalan Cempaka Wangi No 22 <br />Jakarta - Indonesia</p>
                                <p className='text-[#b39dd5] my-3'>support@jobcircle.com</p>
                            </div>
                        </div>
                        <div className="links text-white text-xl space-y-3">
                        <h2 className='mt-3 text-xl flex justify-center items-center gap-2 text-[#fef1ff] '><span className='text-2xl font-bold'>Quick Links</span></h2>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
                            <li><NavLink to='/auth/my-profile'>MyProfile</NavLink></li>
                            <li><NavLink to='/auth/login'>Login</NavLink></li>
                            <li><NavLink to='/auth/register'>Register</NavLink></li>
                        </div>
                        <div className="newsletter">
                            <h2 className='mb-6 mt-3 text-xl flex items-center gap-2 text-[#fef1ff] '><span className='text-2xl font-bold'>Subscribe our NewsLetter</span></h2>
                            {/* join */}

                            <div className="join">
                                <div>
                                    <label className="input validator join-item">
                                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2.5"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                            </g>
                                        </svg>
                                        <input className='' type="email" placeholder="mail@site.com" required />
                                    </label>
                                    <div className="validator-hint hidden">Enter valid email address</div>
                                </div>
                                <button className="btn btn-error text-xl font-bold text-white join-item">Join</button>
                            </div>














                        </div>
                    </div>

                </div>
                <div className="copyright py-6 border-t border-[#fce7f330]">
                    <h3 className='text-center text-xl text-pink-300'>&copy; <span className='font-bold text-pink-500'>JobCircle</span> All Rights Reserved</h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;


