import DatePicker from 'react-datepicker';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hook/useAuth';

const jobCategories = ["On Site", "Remote", "Hybrid", "Part Time"];

const UpdateJob = () => {
    const jobUpdate = useLoaderData();
    const { user } = useAuth();

    // console.log(jobUpdate);
    // const { _id, name, brand, type, price, rating, image } = jobUpdate;

    const [selectedJobPostingDate, setSelectedJobPostingDate] = useState(null);
    const [selectedApplicationDeadline, setSelectedApplicationDeadline] = useState(null);
    const [selectedJobCategory, setSelectedJobCategory] = useState("");

    const handleUpdateJob = (e) => {
        e.preventDefault();

        // get data from user input
        const form = e.target;
        const userName = form.userName.value;
        const jobTitle = form.jobTitle.value;
        const salaryRange = form.salaryRange.value;
        const jobDescription = form.jobDescription.value;
        const jobApplicants = form.jobApplicants.value;
        const bannerURL = form.bannerURL.value;
        const companyLogoURL = form.companyLogoURL.value;

        const updatedJob = {
            bannerURL, companyLogoURL, jobTitle, userName, userEmail: user?.email, jobCategory: selectedJobCategory, salaryRange, jobDescription, jobPostingDate: selectedJobPostingDate,
            applicationDeadline: selectedApplicationDeadline, jobApplicants
        }

        // send data to server 
        fetch(`https://dream-jobs-server-psi.vercel.app/jobUpdate/${jobUpdate._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Job updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>
            <h2>jobUpdate</h2>
            <div className="mt-0">
                <Helmet>
                    <title>Dream Jobs | Update Job</title>
                </Helmet>

                <div className='py-4 lg:py-10' style={{
                    backgroundImage: `url(${"https://i.ibb.co/SXZtJnW/Add-Product-Medium.png"})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 'full',
                }}>
                    <div className="bg-base-200 px-4 lg:px-20 py-4 lg:py-6 m-4 lg:mx-28  shadow-2xl rounded-xl">
                        <SectionTitle heading="Update A Job" subheading="Update your job"></SectionTitle>
                        <form onSubmit={handleUpdateJob}>

                            {/* form Job Title and User Name row */}

                            <div className="md:flex gap-4 mb-8">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="text-lg font-medium ">Job Title</span>
                                    </label>
                                    <label className="rounded">
                                        <input type="text" name="jobTitle" defaultValue={jobUpdate.jobTitle} className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control md:w-1/2 ">
                                    <label className="label">
                                        <span className="text-lg font-medium">User Name</span>
                                    </label>
                                    <label className="rounded">
                                        <input type="text" name="userName" defaultValue={user?.displayName} readOnly className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>

                            {/* form Category & salary Range row */}
                            <div className="md:flex gap-4 mb-8">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="text-lg font-medium">Job Category </span>
                                    </label>
                                    <label className="rounded">
                                        <select
                                            name="jobCategory"
                                            value={selectedJobCategory}
                                            onChange={(e) => setSelectedJobCategory(e.target.value)}
                                            className="input input-bordered w-full" required
                                        >
                                            <option value="">Select Job Category</option>
                                            {jobCategories.map((category) => (
                                                <option key={category} value={category}>
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="text-lg font-medium">Salary Range</span>
                                    </label>
                                    <label className="rounded">
                                        <input type="text" name="salaryRange" defaultValue={jobUpdate.salaryRange} className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>

                            {/* form  company Logo URL and banner URL row */}
                            <div className="md:flex gap-4 mb-8">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="text-lg font-medium">Company logo</span>
                                    </label>
                                    <label className="rounded">
                                        <input type="url" name="companyLogoURL" defaultValue={jobUpdate.companyLogoURL} className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="text-lg font-medium">Banner Image</span>
                                    </label>
                                    <label className="rounded">
                                        <input type="url" name="bannerURL" defaultValue={jobUpdate.bannerURL} className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>

                            {/* form Applicants Number, application Deadline and job Posting Date row */}
                            <div className="md:flex justify-between gap-4 mb-8">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-lg font-medium">Applicants Number</span>
                                    </label>
                                    <label className="rounded">
                                        <input type="number" name="jobApplicants" defaultValue='0' readOnly className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-lg font-medium">Posting Date</span>
                                    </label>
                                    <label className="rounded">
                                        <DatePicker
                                            selected={selectedJobPostingDate}
                                            onChange={(date) => setSelectedJobPostingDate(date)}
                                            className="input input-bordered w-full"
                                            placeholderText="Click Here to Select Date" required
                                        />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-lg font-medium">Application Deadline</span>
                                    </label>
                                    <label className="rounded">
                                        <DatePicker
                                            selected={selectedApplicationDeadline}
                                            onChange={(date) => setSelectedApplicationDeadline(date)}
                                            placeholderText="Click Here to Select Date"
                                            className="input input-bordered"
                                            required
                                        />
                                    </label>
                                </div>
                            </div>


                            {/* form Short description and job Applicants row */}
                            <div className="md:flex gap-4 mb-8">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="text-lg font-medium">Job Description</span>
                                    </label>
                                    <label className="rounded">
                                        <textarea type="text" name="jobDescription" defaultValue={jobUpdate.jobDescription} className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>

                            <input type="submit" value="Update Job" className="btn-block btn bg-[#f97316] text-xl font-medium text-white py-3 rounded-lg hover:bg-[#ff9416] hover:shadow-lg mb-2" style={{ textTransform: "none" }} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateJob;