import axios from "axios";
import moment from "moment";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
    const { user } = useAuth();
    const { email, displayName } = user;

    const { _id, bannerURL, companyLogoURL, jobTitle, jobDescription, salaryRange, jobApplicants, applicationDeadline, userEmail, jobCategory } = useLoaderData();

    // update Job Applicants number
    const [jobApplicantsCount, setJobApplicantsCount] = useState(jobApplicants);

    // Define state to control the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        const currentDate = Date.now();
        const deadlineDate = new Date(applicationDeadline).getTime();

        if (currentDate > deadlineDate) {
            toast.error('Application Deadline is over. You cannot apply for this job');
        } else if (email === userEmail) {
            toast.error("You cannot apply for your own job.");
        } else {
            setIsModalOpen(true);
        }
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleApplyJob = (e) => {
        e.preventDefault();

        // get data from user input
        const form = e.target;
        const name = form.name.value;
        const resumeLink = form.resumeLink.value;
        const appliedJob = { jobCategory, jobTitle, name, email, resumeLink }

        const toastId = toast.loading('Applying for job...');

        // send Applied job data to server
        axios.post('https://dream-jobs-server-psi.vercel.app/appliedJobs', appliedJob, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {
                    closeModal();
                    toast.success('Application Successful', { id: toastId });
                }
            })
            .catch(error => {
                console.error(error);
            });


    }

    // update job Applicants number
    const updateJobApplicant = (id) => {
        const updatedJobApplicantsCount = jobApplicantsCount + 1;
        // console.log(id);
        axios.patch(`https://dream-jobs-server-psi.vercel.app/jobs/${id}/incrementApplicants`, updateJobApplicant)
            .then(res => {
                // console.log(res.data);
                if (res.status === 200) {

                    setJobApplicantsCount(updatedJobApplicantsCount);
                    // toast.success('Application Successful');
                    // closeModal();
                }
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <Helmet>
                <title>Dream Jobs | Jobs Details</title>
            </Helmet>
            <div className="card w-[700px] mx-auto py-4">

                <div className="mx-auto flex items-center justify-center">
                    <div className="border shadow-lg rounded-lg">
                        <img src={bannerURL} alt="" />
                        <div className="flex items-center justify-between px-4 pt-2">
                            <img className="w-36 pt-1" src={companyLogoURL} alt="" />
                            <div className="space-y-2">
                                <h3 className="text-[#f97316] text-center text-5xl font-medium font-kanit ">{jobTitle}</h3>
                                <p><span className="font-medium">Salary Range :</span> {salaryRange}</p>
                                <p><span className="font-medium">Number of Applicants :</span> {jobApplicantsCount}</p>
                                <p><span className="font-medium">Application Deadline :</span> {moment(applicationDeadline).format("Do MMM YYYY")}</p>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="px-4">
                            <p><span className="font-medium">Job Description :</span> {jobDescription}</p>
                        </div>
                        <div className="flex justify-center pt-4 pb-6">
                            <button className="bg-[#f97316] hover:bg-[#ff9416] text-white px-3 py-2 rounded-md font-medium flex items-center" onClick={openModal}>Apply Now</button>
                        </div>

                        {/* Modal */}
                        <dialog id="my_modal_5" className={`modal ${isModalOpen ? "modal-open" : ""}`}>
                            <div className="modal-box w-full">
                                <h3 className="font-bold text-lg text-center">Apply for the Job</h3>
                                <form onSubmit={handleApplyJob}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="text-lg font-medium text-[#ad5cb4] ">Applicant Name</span>
                                        </label>
                                        <label className="rounded">
                                            <input type="text" name="name" defaultValue={displayName} readOnly className="input input-bordered  bg-[#F3F3F3] w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control ">
                                        <label className="label">
                                            <span className="text-lg font-medium text-[#ad5cb4]">Applicant Email</span>
                                        </label>
                                        <input type="email" name="email" defaultValue={email} readOnly className="input input-bordered bg-[#F3F3F3]" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="text-lg font-medium text-[#ad5cb4]">Resume Link</span>
                                        </label>
                                        <label className="rounded">
                                            <input type="text" name="resumeLink" placeholder="Your Resume Link" required className="input input-bordered  bg-[#F3F3F3] w-full" />
                                        </label>
                                    </div>
                                    <div className="flex justify-center pt-4">
                                        <button className="bg-[#f97316] hover:bg-[#ff9416] text-white px-3 py-2 rounded-md font-medium flex items-center" onClick={() => updateJobApplicant(_id)}>Submit Application</button>
                                    </div>
                                </form>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn" onClick={closeModal}>Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;