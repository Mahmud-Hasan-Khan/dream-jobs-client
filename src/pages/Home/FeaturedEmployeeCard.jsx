import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';
import PropTypes from 'prop-types';

const FeaturedEmployeeCard = ({ employeeData }) => {
    const { name, logo, description, jobVacancies, jobListingsLink } = employeeData ? employeeData : {};
    return (
        <div>
            <div className="relative flex flex-col mt-6 text-gray-700 w-64 h-[380px] bg-base-100 border-y-2 border-[#05d6f7] shadow-xl rounded-xl bg-clip-border">
                <div className="p-6">
                    <img className="w-11" src={logo} alt="" />
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {name}
                    </h5>
                    <p className="block font-sans text-sm antialiased  leading-relaxed text-inherit pb-1">
                        {description}
                    </p>
                    <p>Job Vacancies</p>
                    {
                        jobVacancies.map((vacanices, index) => <li className="text-sm pt-1" key={index} > {vacanices}</li>)
                    }
                    <Link className="text-orange-600 flex items-center pt-2" to={jobListingsLink} > Visit Our Job Listing<AiOutlineArrowRight></AiOutlineArrowRight> </Link>
                </div>

            </div>

        </div>
    );
};

FeaturedEmployeeCard.propTypes = {
    employeeData: PropTypes.object.isRequired
}
export default FeaturedEmployeeCard;