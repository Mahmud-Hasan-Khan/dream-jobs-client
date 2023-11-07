import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className='mx-auto sm:w-4/6 md:w-3/4 lg:w-4/12 text-center px-6 lg:px-0 pt-4'>
            <h3 className='text-3xl lg:text-4xl font-bold border-y-2 lg:border-y-4 text-[#05d6f7] border-[#05d6f7] py-2 font-kanit'>{heading}</h3>
            <h4 className="text-[#f97316] py-2 font-normal lg:font-medium">----- {subheading} -----</h4>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired
}

export default SectionTitle;