import Marquee from "react-fast-marquee";
import intel from '../../assets/intel.jpg'
import google from '../../assets/google.jpg'
import amazon from '../../assets/amazon.jpg'
import tesla from '../../assets/tesla.jpg'
import netflix from '../../assets/netflix.jpg'
import spacex from '../../assets/spacex.jpg'
import adobe from '../../assets/adobe.jpg'
import meta from '../../assets/meta.jpg'
import apple from '../../assets/apple.jpg'



const TopTrendingCompanies = () => {
    
    return (
        <div className='py-36'>
            <div className="container mx-auto ">
                <h5 className='text-[#1967d2] text-xl text-center'>Top Trending Companies</h5>
                <h1 className='text-center my-5 text-3xl lg:text-6xl font-semibold text-[#334155]'>Get Hired In Top Trending Companies</h1>
                <div className="marquee-sec lg:py-32 mt-12">
                    <Marquee 
                    pauseOnHover={true} 
                    speed={100} 
                    
                    className="space-x-9"
                    >
                        <img className="mx-8 rounded-md shadow-2xl" src={google} alt="" />
                        <img className="mx-8 rounded-md shadow-2xl" src={amazon} alt="" />
                        <img className="mx-8 rounded-md shadow-2xl" src={netflix} alt="" />
                        <img className="mx-8 rounded-md shadow-2xl" src={tesla} alt="" />
                        <img className="mx-8 rounded-md shadow-2xl" src={apple} alt="" />
                        <img className="mx-8 rounded-md shadow-2xl" src={spacex} alt="" />
                        <img className="mx-8 rounded-md shadow-2xl" src={meta} alt="" />
                        <img className="mx-8 rounded-md shadow-2xl" src={adobe} alt="" />           
                        <img className="mx-8 rounded-md shadow-2xl" src={intel} alt="" />
                        <img className="mx-8 rounded-md shadow-2xl" src={apple} alt="" />
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default TopTrendingCompanies;