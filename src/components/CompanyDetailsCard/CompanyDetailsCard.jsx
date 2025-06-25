
import JobListing from '../JobListing/JobListing';



const CompanyDetailsCard = ({ singleCompanyData }) => {
    const { logo, name, industry, location, website } = singleCompanyData;
    const jobsData=singleCompanyData?.jobs;
    const websiteDataForModal=singleCompanyData?.website;
    
   
    return (
        <div className='bg-[#f1f5f8] py-24 '>
            <div className="container mx-auto pb-24">
                <div className="logo">
                    <img className='mx-auto' src={logo} alt="" />
                </div>
                <div className="content px-3 lg:px-0">
                    <h1 className='text-center mt-9 text-5xl font-bold text-[#334155]'>Company Name: <span className='text-[#eb4335]'>{name}</span></h1>
                    <div className="more-details space-y-5 lg:space-y-0 lg:flex justify-center items-center gap-6 mt-9">
                        <div className="industry- bg-[#000525] p-5 rounded-xl shadow-xl">
                            <h3 className='text-2xl text-white font-medium'>Industry: <span className='text-xl'>{industry}</span></h3>
                        </div>
                        <div className="location- bg-[#000525] p-5 rounded-xl shadow-xl">
                            <h3 className='text-2xl text-white font-medium'>Location: <span className='text-xl'>{location}</span></h3>
                        </div>
                        <div className="website- bg-[#000525] p-5 rounded-xl shadow-xl">
                            <h3 className='text-2xl text-white font-medium'>Website: <a target='_blank' href={website} className='text-xl'>{website}</a></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jobs py-24 bg-[#f8f9fa]">
                <h2 className='container mx-auto my-5 text-3xl font-bold text-[#334155] text-center lg:text-left'>Job Opens: </h2>
                {
                    jobsData?.map((data)=><JobListing
                    key={data.id}
                    singleJob={data}
                    websiteDataForModal={websiteDataForModal}
                    ></JobListing>)
                }
            </div>

        </div>
    );
};

export default CompanyDetailsCard;