import { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from 'sweetalert2';

const MyJobs = () => {
    const [userJobs, setUserJobs] = useState([]);
    const { user, loading } = useAuth();
    console.log(user?.email);

    useEffect(() => {
        fetch(`http://localhost:3000/perUerJobs?email=${user?.email}`)
            .then((response) => response.json())
            .then((data) => {
                setUserJobs(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [user?.email]);

    let serial = 1;
    console.log(userJobs);

    const handleDeleteJob = (id) => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('delete conform');
                // delete single api data from server
                fetch(`http://localhost:3000/jobsDelete/${id} `,
                    {
                        method: 'DELETE',
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            // update state
                            const remaining = userJobs.filter(job => job._id !== id);
                            setUserJobs(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div>
                <Helmet>
                    <title>Dream Jobs | My Added Jobs</title>
                </Helmet>

                <SectionTitle heading="My Added Jobs" subheading="See all my added jobs"></SectionTitle>
                {/* search option */}

                <div className="lg:mt-6">
                    {loading ? (
                        <div className="min-h-screen flex items-center justify-center">
                            <span className="loading loading-infinity loading-lg text-[#00AEEF]"></span>
                        </div>
                    ) : userJobs && userJobs.length > 0 ? (
                        <div className="max-w-5xl mx-auto">
                            <h4 className="text-center text-lg text-[#ac52b4] font-medium">Total Job Found {userJobs.length}</h4>
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
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userJobs.map((jobData) => (
                                            <tr key={jobData._id}>
                                                <th>{serial++}</th>
                                                <td>{jobData.jobTitle}</td>
                                                <td>{jobData?.userName}</td>
                                                <td>{moment(jobData?.jobPostingDate).format("Do MMM YYYY")}</td>
                                                <td>{moment(jobData?.applicationDeadline).format("Do MMM YYYY")}</td>
                                                <td>{jobData?.salaryRange}</td>
                                                <td>
                                                    <Link
                                                        to={`/jobUpdate/${jobData._id}`}
                                                        className="bg-[#00AEEF] hover:bg-[#ff9416] p-2 rounded text-white font-medium"
                                                    >
                                                        Update
                                                    </Link>
                                                </td>
                                                <td><button onClick={() => handleDeleteJob(jobData._id)} className="bg-red-500 hover:bg-[#00AEEF] p-2 rounded"> <MdOutlineDeleteOutline className="text-xl text-white"></MdOutlineDeleteOutline> </button></td>
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

export default MyJobs;

