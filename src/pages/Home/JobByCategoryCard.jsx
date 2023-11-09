import moment from "moment/moment";
import { useState } from "react";
import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const JobByCategoryCard = ({ job }) => {
    // console.log(job);
    const { _id, bannerURL, jobPostingDate, jobTitle, userName, applicationDeadline, salaryRange, jobApplicants } = job ? job : {};
    const [isHovered, setIsHovered] = useState(false);


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="card lg:card-side h-full bg-base-100 border-y-2 border-[#05d6f7] shadow-xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <figure className="lg:w-1/2">
                <img
                    src={bannerURL}
                    alt="instructor"
                    className={`rounded-xl h-full object-fill w-full transition-transform duration-500 ${isHovered ? "scale-105" : ""
                        }`}
                />
            </figure>
            <div className="lg:pl-10 px-2 py-4 lg:py-0 w-96 my-auto space-y-1">
                <h2 className="card-title text-[#05d6f7]">{jobTitle}</h2>
                <p><span className="font-medium">Posted By :</span> {userName}</p>
                <p><span className="font-medium">Posting Date :</span> {moment(jobPostingDate).format("Do MMM YYYY")}</p>
                <p><span className="font-medium">Deadline :</span> {moment(applicationDeadline).format("Do MMM YYYY")}</p>
                <p><span className="font-medium">Salary Range :</span> {salaryRange}</p>
                <p><span className="font-medium">Applicants Number :</span> {jobApplicants}</p>
                <div className="py-1">
                    <Link className="bg-[#f97316] hover:bg-[#ff9416] flex items-center text-white font-medium rounded p-2 w-fit" to={`/jobDetails/${_id}`} >View Details<FcViewDetails /></Link>
                </div>
            </div>
        </div>
    );
};

JobByCategoryCard.propTypes = {
    job: PropTypes.object
}

export default JobByCategoryCard;