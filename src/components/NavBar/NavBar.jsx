import { Link, NavLink } from 'react-router';
import { BsFillBagXFill } from 'react-icons/bs';
import { use } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import logo from '../../assets/main-logo.jpg'
import toast from 'react-hot-toast';
const NavBar = () => {
    const { user, logOut } = use(AuthContext);
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/auth/my-profile'>MyProfile</NavLink></li>
        <li><NavLink to='/auth/login'>Login</NavLink></li>
        <li><NavLink to='/auth/register'>Register</NavLink></li>
    </>

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
            .catch(() => {
                
            })
    }
    return (
        <div className='bg-[#fff] backdrop-blur-2xl shadow-2xl py-2'>
            <nav className='container mx-auto min-h-16 flex items-center justify-between'>
                <div className="logo flex items-center justify-between  w-full lg:block px-5 lg:px-0">
                    <Link to='/'><img src={logo} alt="" /></Link>
                    {/* mobile menu start */}
                    <div className="mobile-menu lg:hidden">
                        <div className="navbar-start">
                            <div className="dropdown ">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                                </div>
                                <div className="pr-22">
                                    <ul tabIndex={0} className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-26  p-2shadow">
                                    
                                        {
                                            user ? <> <Link to='/auth/my-profile'><img className='w-12 h-12 rounded-full' src={user.photoURL} /></Link>
                                                <button onClick={handleLogOut} className="mt-3 btn btn-outline border-1 border-pink-500 px-2  hover:bg-pink-700 hover:text-white">Log Out</button>

                                            </> : <>{links}</>
                                        }
                                        <li className='text-[12px] z-50'><NavLink to='/contact-us'>Contact Us</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inks hidden lg:w-6/12 lg:block">
                    <ul className='w-full gap-6 text-black font-medium flex items-center justify-end'>

                        {
                            user ? <>
                                <div className='w-full flex items-center justify-end gap-6'>
                                    <Link to='/auth/my-profile'><img className='w-22 h-22 rounded-full' src={user.photoURL} /></Link>
                                    <button onClick={handleLogOut} className="btn btn-outline border-2 border-pink-500 px-8 text-[16px] font-medium hover:bg-pink-700 hover:text-white">Log Out</button>
                                </div>
                            </> : <div className='flex items-center gap-6 justify-end'>{links}</div>
                        }

                        <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
                    </ul>

                </div>
            </nav>
        </div>

    );
};

export default NavBar;