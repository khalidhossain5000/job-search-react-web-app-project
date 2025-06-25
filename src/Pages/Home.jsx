import React from 'react';
import Banner from '../components/Banner/Banner';
import HowItWork from '../components/HowItWork/HowItWork';
import Companies from '../components/CompaniesContainer/Companies';
import DownloadAppSection from '../components/DownloadApp/DownloadAppSection';
import TopTrendingCompanies from '../components/TopComanies/TopTrendingCompanies';

const Home = () => {
    return (
        <div>
            
            <Banner/>
            <HowItWork/>
            <Companies/>
            <DownloadAppSection/>
            <TopTrendingCompanies/>
        </div>
    );
};

export default Home;