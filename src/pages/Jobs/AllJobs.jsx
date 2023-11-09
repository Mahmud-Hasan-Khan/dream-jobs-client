import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import useJobs from "../../hook/useJobs";
import { FaSearch } from 'react-icons/fa';
import moment from "moment";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { toast } from "react-hot-toast";

const AllJobs = () => {
    const { user } = useAuth();
    const { data, isLoading } = useJobs();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    let serial = 1;

    useEffect(() => {
        // Initially, show all data
        setFilteredData(data);
    }, [data]);

    const handleSearch = () => {
        // Filter data based on search query
        const filterJobs = data.filter(jobData => jobData.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredData(filterJobs);
    };

    return (
        <div>
            <Helmet>
                <title>Dream Jobs | All Jobs</title>
            </Helmet>

            <SectionTitle heading="All Jobs" subheading="See the jobs all the users have added"></SectionTitle>
            {/* search option */}
            <div className="container mx-auto">
                <h1 className='text-[#ac52b4] lg:text-3xl lg:px-3 lg:py-2 font-medium text-center'>One Search, Get Your Jobs</h1>
                <div className="w-full px-3 lg:mb-6 md:mb-0 relative flex items-center gap-2 justify-center">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Job Title"
                            className="lg:w-96 px-5 py-3 border rounded-md border-gray-300 focus:outline-[#00d260] bg-base-200 text-gray-900 pl-10"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FaSearch className="text-gray-400" />
                        </div>
                    </div>
                    <button
                        className="md:ml-2 bg-[#f97316] hover:bg-[#ff9416] text-white font-medium py-3 px-4 rounded-lg"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>

            <div className="lg:mt-6">
                {isLoading ?
                    (
                        <div className="min-h-screen flex items-center justify-center">
                            <span className="loading loading-infinity loading-lg text-[#00AEEF]"></span>
                        </div>
                    )
                    : filteredData && filteredData.length > 0 ?
                        (
                            <div className="max-w-5xl mx-auto">
                                <h4 className="text-center text-lg text-[#ac52b4] font-medium">Total Job Found {filteredData.length}</h4>
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr className="bg-[#00AEEF] text-white text-base font-normal ">
                                                <th>Serial</th>
                                                <th>Job Title</th>
                                                <th>Job Posted By</th>
                                                <th>Job Posting Date</th>
                                                <th>Application Deadline</th>
                                                <th>Salary range</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredData.map(jobData => (
                                                <tr key={jobData._id}>
                                                    <th>{serial++}</th>
                                                    <td>{jobData.jobTitle}</td>
                                                    <td>{jobData?.userName}</td>
                                                    <td>{moment(jobData?.jobPostingDate).format("Do MMM YYYY")}</td>
                                                    <td>{moment(jobData?.applicationDeadline).format("Do MMM YYYY")}</td>
                                                    <td>{jobData?.salaryRange}</td>
                                                    <td>
                                                        <Link to={`/jobDetails/${jobData._id}`}
                                                            className="bg-[#00AEEF] hover:bg-[#ff9416] p-2 rounded text-white font-medium"
                                                            onClick={() => {
                                                                if (!user) {
                                                                    toast.error("You have to log in first to view details");
                                                                    return
                                                                }
                                                            }}                                                  >
                                                            Details
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center text-lg text-[#ac52b4] font-medium">
                                No jobs found.
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default AllJobs;

