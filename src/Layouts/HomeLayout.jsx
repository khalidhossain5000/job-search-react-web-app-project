import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/loading';
import { Helmet } from 'react-helmet-async';
import { PacmanLoader } from 'react-spinners';



const HomeLayout = () => {
    const {state}=useNavigation()
    
        //INTIAL WELCOME SPINNER START
        const [welcomeLoader, setWelcomeLoader] = useState(true);
        useEffect(() => {
            const timer = setTimeout(() => {
                setWelcomeLoader(false);
            }, 500);
            return () => clearTimeout(timer)
        }, [])
    
        if (welcomeLoader) {
            return (
                <div className='flex items-center justify-center fixed inset-0 bg-white z-50'>
                    <PacmanLoader
                        color="#0fbf7f"
                        height={55}
                        speedMultiplier={1}
                    />
                </div>
            )
        }
    return (
        <div>
            <div className="dynamic-title">
                <Helmet>
                    <title>Home | Job-Circle</title>
                </Helmet>
            </div>
            <header>
                <NavBar />
            </header>
            <main className='overflow-x-hidden' >
                {
                    state==="loading" ? <Loading/> : <Outlet/>
                }
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default HomeLayout;