import SectionTitle from "../../components/SectionTitle";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";

const AppliedJobs = () => {

    const [appliedJobs, setAppliedJobs] = useState([]);
    const { user, loading } = useAuth();

    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/appliedJobs?email=${user?.email}`)
            .then((response) => response.json())
            .then((data) => {
                setAppliedJobs(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [user?.email]);

    let serial = 1;
    console.log(appliedJobs);

    const filteredJobs = appliedJobs.filter((jobData) =>
        selectedCategory === '' || jobData.jobCategory === selectedCategory
    );

    return (
        <div>
            <h2>Applied Jobs</h2>
            <div>
                <Helmet>
                    <title>Dream Jobs | Applied Jobs</title>
                </Helmet>

                <SectionTitle heading="My Applied Jobs" subheading="See all your Applied jobs"></SectionTitle>
                {/* search option */}

                <div className="flex items-center justify-center">
                    <div className="lg:mt-6 border border-red-500 rounded p-3">
                        <label htmlFor="jobCategorySelect">Filter by Category: </label>
                        <select
                            id="jobCategorySelect"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="On Site">On Site</option>
                            <option value="Remote">Remote</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Part Time">Part Time</option>
                        </select>
                    </div>
                </div>

                <div className="lg:mt-6">
                    {loading ? (
                        <div className="min-h-screen flex items-center justify-center">
                            <span className="loading loading-infinity loading-lg text-[#00AEEF]"></span>
                        </div>
                    ) : appliedJobs && appliedJobs.length > 0 ? (
                        <div className="max-w-5xl mx-auto">
                            <h4 className="text-center text-lg text-[#ac52b4] font-medium">Total Job Found {filteredJobs.length}</h4>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr className="bg-[#00AEEF] text-white text-base font-normal ">
                                            <th>Serial</th>
                                            <th>Job Title</th>
                                            <th>Job Category</th>
                                            <th>Resume Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredJobs.map((jobData) => (
                                            <tr key={jobData._id}>
                                                <th>{serial++}</th>
                                                <td>{jobData.jobTitle}</td>
                                                <td>{jobData?.jobCategory}</td>
                                                <td>{jobData?.resumeLink}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-lg text-[#ac52b4] font-medium">No jobs found.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;