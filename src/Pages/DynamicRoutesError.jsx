import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router';

const DynamicRoutesError = () => {
    const {id}=useParams()
    return (
        <div>
            <div className="dynamic-title">
                <Helmet>
                    <title>Invalid Routes</title>
                </Helmet>
            </div>
              <main className='py-24 px-2 lg:px-0 bg-gradient-to-br from-[#000626] to-[#4a92ea]'>
                <div className="container mx-auto">
                    <div className="title text-center">
                        <h1 className='text-[210px] text-[#20ca6f] '>404</h1>
                        <h2 className='text-3xl font-medium text-white'>Ooops, Page Not Found with this -id- <span className='text-5xl text-red-600'>{id}</span></h2>
                        
                        <Link to='/'>
                            <button className="lg:mt-6 mx-auto btn w-9/12 bg-gradient-to-br from-[#00082a] to-[#143a70] p-8 border-pink-300 text-xl text-pink-100 rounded-xl mt-4 hover:bg-gradient-to-bl hover:from-[#e050de] hover:to-[#5b04ed] transition duration-700">Back To Home</button>
                        </Link>
                    </div>
                    
                </div>
            </main>
        </div>
    );
};

export default DynamicRoutesError;