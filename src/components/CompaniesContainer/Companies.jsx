import React, { Suspense, use, useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import Company from '../CompanySingle/Company';
const companiesPromise = fetch('/company-data.json').then((res) => res.json());

const Companies = () => {
    const companiesData = use(companiesPromise);
    const [companiesAllData, setCompaniesAllData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (showAll) {
            setCompaniesAllData(companiesData);
        }
        else {
            setCompaniesAllData(companiesData.slice(0, 8))
        }
    }, [companiesData, showAll])
    return (
        <div className='bg-[#ffeefe] py-24'>
            <h1 className='my-5 text-6xl font-bold text-[#334155] text-center'>All Companies</h1>

            {/* companies container */}
            <div className='container mx-auto lg:py-12 grid lg:grid-cols-4 grid-cols-1 items-stretch gap-6'>
                <Suspense fallback={<PacmanLoader></PacmanLoader>}>
                    {
                        companiesAllData.map((company) => <Company
                            key={company.id}
                            company={company}
                        ></Company>)
                    }
                </Suspense>
            </div>
            <div className="btnn text-center py-6">
                <button onClick={() => setShowAll(!showAll)} className="btn mx-auto w-6/12 bg-[#011133] p-8 border-pink-300 text-xl text-pink-100 rounded-xl mt-4 hover:bg-gradient-to-bl hover:from-[#e050de] hover:to-[#5b04ed] transition duration-700">{showAll ? <h2>Hide All Company</h2> : <h2>Show All Company</h2>}</button>
            </div>
        </div>
    );
};

export default Companies;