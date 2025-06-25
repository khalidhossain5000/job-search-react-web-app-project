
import { FaMoneyBills } from 'react-icons/fa6';
import { FiType } from 'react-icons/fi';
import { IoLocationSharp } from 'react-icons/io5';
import { MdCheckCircle } from 'react-icons/md';
import { TbZoomMoney } from 'react-icons/tb';



const JobListing = ({ singleJob, websiteDataForModal }) => {
    const { id, title, salary, jobType, description, bannerImage, location, requirements } = singleJob;
    const dialogId = `modal-${id}`
    const brandWebsite = websiteDataForModal;
    const handleOpenWebsite=()=>{
        window.open(brandWebsite,'_blank');
    }
    return (
        <div className='py-6 px-3 lg:px-0'>
            <div className="container mx-auto">
                <div className="shadow-md hover:shadow-2xl hover:border-cyan-400 lg:flex justify-between items-center list-contianer bg-[#ffffff] p-5 lg:p-8 rounded-2xl shadow-3xl border-2 border-orange-500">
                    <div className="content">
                        <div className="name">
                            <h2 className='text-center lg:text-left text-2xl font-bold text-[#334155]'>
                                {title}
                            </h2>
                            <p className='text-[17px] text-[#64748b] mt-2 text-center lg:text-left'>
                                {description}
                            </p>
                        </div>
                        <div className="other content lg:flex justify-between lg:justify-start items-center gap-5 pt-6 space-y-5 lg:space-y-0">
                            <h5 className='bg-[#dde8f8] py-2 px-3 rounded-xl text-[#1b85e8] font-medium text-center'>{jobType}</h5>
                            <h4 className='flex justify-center lg:justify-start items-center gap-3 font-medium'><FaMoneyBills size={30} />{salary}</h4>
                        </div>
                    </div>
                    <div onClick={() => document.getElementById(dialogId).showModal()} className="apply-btn mt-5 lg:mt-0">
                        <button className="btn btn-outline border-1 border-orange-600 text-xl w-full hover:text-white hover:bg-cyan-500 hover:border-none">Show Details</button>
                    </div>

                </div>
            </div>



            
      {/* modal start */}
            <dialog id={dialogId} className="modal">
                <div className="modal-box bg-gradient-to-br from-[#1a0830] to-[#00163d] lg:w-11/12 max-w-7xl">
                    <div className="img ">
                        <img className='mx-auto lg:w-9/12 shadow-xl rounded-xl' src={bannerImage} alt="" />
                    </div>
                    <div className="title-des lg:w-11/12 mx-auto mt-6 pt-5 border-t-1 border-[#d950d150]">
                        <h3 className='text-center lg:text-left text-2xl font-bold text-[#eee0ff]'>{title}</h3>
                        <p className='text-[#eddffe] my-2 text-center lg:text-left'>{description}</p>
                    </div>
                    {/* More details start */}
                    <div className="border-b-1 py-6 lg:py-8 border-[#d950d150] mt-3 lg:mt-9 lg:w-11/12 mx-auto space-y-2 lg:flex items-center gap-6">
                        <h3 className='lg:justify-start lg:text-[17px] text-[#fdebf7] justify-center flex items-center gap-2 p-3 lg:p-5 rounded-xl shadow-md hover:shadow-2xl bg-gradient-to-r from-[#000322] to-[#233d7b]'><FiType size={30} />{jobType}</h3>
                        <h3 className='lg:text-[17px] text-[#fdebf7] flex items-center gap-2 p-3 justify-center lg:justify-start lg:p-5 rounded-xl shadow-md hover:shadow-2xl  bg-gradient-to-r from-[#000322] to-[#233d7b]'><TbZoomMoney size={30} />{salary}</h3>
                        <h3 className='text-[#fdebf7] lg:justify-start justify-center lg:text-[17px] flex items-center gap-2 p-3 lg:p-5 rounded-xl shadow-md hover:shadow-2xl  bg-gradient-to-r from-[#000322] to-[#233d7b]'><IoLocationSharp size={30} /> {location}</h3>
                    </div>
                    <div className="req lg:w-11/12 mx-auto mt-6">
                        <h3 className='text-center lg:text-left text-xl mb-5 font-bold text-[#eee0ff]'>Requirements:</h3>
                        {
                            requirements.map((req, i) => <ul key={i}>
                                <li className='text-[#eddffe] my-2 flex items-center gap-2'><MdCheckCircle className='hidden lg:block' size={25} /> {req}</li>
                            </ul>)
                        }
                    </div>
                    <div className="buttons w-11/12 mx-auto border-b-1 py-8 border-[#d950d150]">
                        <div className="button-container flex items-center justify-center mx-auto gap-6">
                            <div className="apply w-full flex justify-center" >
                                <button onClick={handleOpenWebsite} className='flex-1 w-[50%] text-[20px] text-[#fdebf7] p-5 rounded-xl shadow-md hover:shadow-2xl bg-gradient-to-r from-[#000322] to-[#233d7b] cursor-pointer'>
                                Apply
                                </button>
                            </div>
                            {/* close button */}
                            <div className="modal-action w-full" >
                                <form method="dialog" className='w-full flex justify-center -mt-5'>
                                    {/* if there is a button, it will close the modal */}
                                    <button className='w-full text-[20px] text-[#fdebf7] p-5 rounded-xl shadow-md hover:shadow-2xl bg-gradient-to-r from-[#ad54d1] to-red-500 cursor-pointer'>Close</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </dialog>
            {/* modal end */}
        </div>
    );
};
// {
//     "id": "job-003",
//     "title": "UX Designer",
//     "bannerImage": "https://i.ibb.co.com/Kjd497wx/03-ui-ux.jpg",
//     "location": "San Francisco, CA",
//     "salary": "$95,000 - $120,000",
//     "jobType": "Full-time",
//     "description": "Work with teams to design intuitive user experiences.",
//     "requirements": [
//         "Proficient in Figma, Sketch, or Adobe XD",
//         "Experience with user research and testing",
//         "Strong understanding of design principles",
//         "Excellent communication skills"
//     ]
// }




export default JobListing;