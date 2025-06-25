import React from 'react';
import { Link } from 'react-router';

const Company = ({ company }) => {
    const { logo, name ,id} = company;
    
    return (
        <div className='bg-white p-9 rounded-2xl shadow-2xl mt-12'>
            <div className='flex justify-center'>
                <Link to={`/company-details/${id}`}>
                    <img className='' src={logo} alt="" />
                </Link>
            </div>
            <h3 className='text-center mt-9 my-5 text-2xl font-bold text-[#334155]'>{name}</h3>
            
        </div>
    );
};

export default Company;