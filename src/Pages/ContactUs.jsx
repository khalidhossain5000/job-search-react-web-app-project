import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import { FaLocationDot } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';
import { Helmet } from 'react-helmet-async';



const ContactUs = () => {
    return (
        <div>
            <div className="dynamic-title">
                <Helmet>
                    <title>Contact-Us</title>
                </Helmet>
            </div>
            <NavBar />
            <div className='py-24 px-2 lg:px-0 bg-gradient-to-b from-[#000626] to-[#0e315b]'>
                <h1 className='text-pink-300 text-center lg:text-6xl text-3xl font-bold lg:py-12 py-6'>Contact Us </h1>
                <div className="p-8 container mx-auto rounded-xl shadown-2xl form bg-gradient-to-br from-[#14061d] to-[#ad0ae7] lg:flex items-center justify-between">
                    <div className="content lg:w-[50%] p-6">
                        <h5 className='text-pink-100 text-xl text-center lg:text-left'>Get in touch</h5>
                        <h1 className='text-center lg:text-left my-5 text-3xl lg:text-5xl font-semibold text-pink-300 lg:mb-12'>Don't hesitate to contact us for more information.</h1>
                        <div className="icon-title">
                            <h2 className='text-xl flex items-center gap-2 text-[#fef1ff] '><FaLocationDot /><span className='text-2xl font-bold'>Location</span></h2>
                            <p className='text-[#b39dd5] my-3'>Jalan Cempaka Wangi No 22 <br />Jakarta - Indonesia</p>
                        </div>
                        <div className="icon-title">
                            <h2 className='text-xl flex items-center gap-2 text-[#fef1ff] '><MdMail /><span className='text-2xl font-bold'>Email us</span></h2>
                            <p className='text-[#b39dd5] my-3'>support@yjobcircle.com <br />info@jobcircle.com</p>
                        </div><div className="icon-title">
                            <h2 className='text-xl flex items-center gap-2 text-[#fef1ff] '><FaLocationDot /><span className='text-2xl font-bold'>Call us</span></h2>
                            <p className='text-[#b39dd5] my-3'>Phone : +6221.2002.2012<br />Fax : +62212002.2013</p>
                        </div>
                    </div>
                    <div className="form lg:w-[50%]">
                        <form className='flex flex-col justify-center items-center'>

                            <input name='name' type="text" className=" input lg:w-9/12 bg-[#011133] border border-pink-300 rounded-xl p-8 text-white placeholder:text-pink-200 placeholder:text-xl" placeholder="Name" /><br />


                            <input name='email' type="email" className=" input lg:w-9/12 bg-[#011133] border border-pink-300 rounded-xl p-8 text-white placeholder:text-pink-200 placeholder:text-xl" placeholder="Email" /><br />


                            <input name='name' type="text" className=" input lg:w-9/12 bg-[#011133] border border-pink-300 rounded-xl p-8 text-white placeholder:text-pink-200 placeholder:text-xl" placeholder="Subject" /><br />



                            <textarea
                                cols={12}
                                rows={60}
                                placeholder='Enter Your Message'
                                className="lg:h-34 h-26 input lg:w-9/12 bg-[#011133] border border-pink-300 rounded-xl p-8 text-white placeholder:text-pink-200 placeholder:text-xl"
                            ></textarea>





                            <button className="btn w-9/12 bg-[#011133] p-8 border-pink-300 text-xl text-pink-100 rounded-xl mt-4 hover:bg-gradient-to-bl hover:from-[#e050de] hover:to-[#5b04ed] transition duration-700">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;