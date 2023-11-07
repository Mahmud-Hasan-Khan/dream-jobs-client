import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const { _id, bannerURL, companyLogoURL, jobTitle, jobDescription, salaryRange, jobApplicants } = useLoaderData();


    return (
        <div className="card w-[700px] mx-auto">
            <div className="mx-auto flex items-center justify-center">
                <div className="border shadow-lg rounded-lg">
                    <img src={bannerURL} alt="" />
                    <div className="flex items-center justify-between px-4 pt-2">
                        <img className="w-36 pt-1" src={companyLogoURL} alt="" />
                        <div className="space-y-2">
                            <h3 className="text-[#f97316] text-center text-5xl font-medium font-kanit ">{jobTitle}</h3>
                            <p><span className="font-medium">Salary Range :</span> {salaryRange}</p>
                            <p><span className="font-medium">Number of Applicants :</span> {jobApplicants}</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <p><span className="font-medium">Job Description :</span> {jobDescription}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;