import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';



const Login = () => {
    const [email,setEmail]=useState("")
    const { logInUser, googleLogIn } = use(AuthContext);
    const [wrongPassword, setWrongPassword] = useState("");
    const loginLocation = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        setWrongPassword("")
        logInUser(email, password)
            .then(() => {
                
                toast.success('Log In Successfull',{
                    className: 'w-[300px] h-[100px] text-whitetext-xl font-bold',
                    removeDelay: 1000,
                    iconTheme: {
                        primary: '#16061e',
                        secondary: '#ef54e2',
                      },
                      style: {
                        border: '1px solid black',
                        color:'white',
                        backgroundImage:'linear-gradient(to bottom, #ef54e2, #16061e)'
                      },
                });
                
                navigate(`${loginLocation.state?.from || "/"}`,{replace:true} );
            })
            .catch((error) => {
                setWrongPassword("Opps-Wrong password or email--Try again")
                
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
    // handle google login
    const handleGoogleLogin = () => {
        googleLogIn()
            .then((result) => {
                toast.success('Log In Successfull', {
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
                navigate(`${loginLocation.state ? loginLocation.state : "/"}`,{replace:true} );
                console.log(result);
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
    return (
        <div className='py-24 bg-gradient-to-b from-[#000626] to-[#0e315b]'>
            <div className="dynamic-title">
                <Helmet>
                    <title>Login</title>
                </Helmet>
            </div>
            <div className="container mx-auto">
                <div className="title text-center space-y-2 py-6">
                    <h3 className='text-2xl font-bold text-gray-300'>Welcome Back</h3>
                    <h1 className='text-3xl font-bold text-[#c0b4d1]'>Log In your account</h1>
                    <h5 className='text-xl font-semibold text-gray-300'>Please enter your details to sign in.</h5>
                </div>
                <div className="card bg-[#000728] w-full max-w-7xl mx-auto shrink-0 shadow-2xl py-16">
                    <div className="card-body">
                        <form onSubmit={handleLogin} className='flex flex-col justify-center items-center'>
                            <label className="w-9/12 text-left label text-xl text-pink-300">Email</label><br />
                            <input onChange={(e)=>setEmail(e.target.value)} name='email' value={email} type="email" className=" input w-9/12 bg-[#011133] border border-pink-300 rounded-xl p-8 text-white placeholder:text-pink-200 placeholder:text-xl" placeholder="Email" /><br />

                            <label className="w-9/12 text-left label text-xl text-pink-300">Password</label><br />
                            <input name='password' type="password" className="input w-9/12 bg-[#011133] border border-pink-300 rounded-xl p-8 text-white placeholder:text-pink-200 placeholder:text-xl" placeholder="Password" />
                            {/* FORGER PASSWORD  */}
                            <div className='pt-3 w-9/12'>
                    
                                <Link state={{email:email}} to='/auth/forget-password' className="text-left text-[16px] link link-hover text-pink-300">Forgot password?</Link>
                            </div>



                            {/* wrong pass */}
                            <div>
                                {wrongPassword && <h2 className='text-xl text-pink-600'>{wrongPassword}</h2>}
                            </div>
                            <button className="btn w-9/12 bg-[#011133] p-8 border-pink-300 text-xl text-pink-100 rounded-xl mt-4 hover:bg-gradient-to-bl hover:from-[#e050de] hover:to-[#5b04ed] transition duration-700">Login</button>
                        </form>
                        {/* social login start */}
                        <div className="border-t border-[#fce7f350] py-3 mt-5 social-login w-full flex flex-col items-center justify-center">
                            <h2 className='border-b border-[#fce7f350] w-full text-center border[#fce7f350] pb-5 text-2xl font-bold text-gray-300'>Or</h2>
                            {/* Google */}
                            <button onClick={handleGoogleLogin} className="mt-5 w-9/12 mx-auto btn bg-white text-black border-[#e5e5e5] text-xl p-8 rounded-xl">
                                <svg aria-label="Google logo" width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                        </div>
                        {/* DONT HAVE ACCOUNT START HERE*/}
                        <div>
                            <h5 className='w-9/12 mx-auto text-xl text-gray-300'>Don't have an account? <Link state={{from:loginLocation.state?.from || '/auth/my-profile'}} to='/auth/register' className='text-pink-600 font-bold'>Register</Link> Here</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;