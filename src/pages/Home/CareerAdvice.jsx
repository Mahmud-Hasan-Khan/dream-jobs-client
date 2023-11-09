import SectionTitle from "../../components/SectionTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../../assets/image/TopCareerAdvice/Career-Advice-Position1@2x-01.webp'
import image2 from '../../assets/image/TopCareerAdvice/Career-Advice-Position2@2x-01.webp'
import image3 from '../../assets/image/TopCareerAdvice/Career-Advice-Position3@2x-01.webp'
import image4 from '../../assets/image/TopCareerAdvice/Career-Advice-Position5@2x-01.webp'

const CareerAdvice = () => {



    AOS.init({
        duration: 3000,
    })

    return (
        <div>
            <div data-aos="fade-left">
                <SectionTitle heading="Top Career Advice" subheading="Get Top Career Advice From Expert"></SectionTitle>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 py-4" data-aos="fade-right">
                <div className="card w-72 bg-base-100 shadow-xl border">
                    <figure className="px-4 pt-4">
                        <img src={image1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-start">
                        <p className="uppercase bg-[#409aa9] rounded text-white p-1 text-sm text-left">assessment</p>
                        <p>11 awesome free career self assessment</p>
                    </div>
                </div>
                <div className="card w-72 h bg-base-100 shadow-xl border">
                    <figure className="px-4 pt-4">
                        <img src={image2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-start">
                        <p className="uppercase bg-[#f5c55d] rounded text-white p-1 text-sm text-left">jobs</p>
                        <p>How to start looking for a job</p>
                    </div>
                </div>
                <div className="card w-72 bg-base-100 shadow-xl border">
                    <figure className="px-4 pt-4">
                        <img src={image3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-start">
                        <p className="uppercase bg-[#a1ddb0] rounded text-white p-1 text-sm text-left">Resume</p>
                        <p>Resume samples</p>
                    </div>
                </div>
                <div className="card w-72 bg-base-100 shadow-xl border">
                    <figure className="px-4 pt-4">
                        <img src={image4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-start">
                        <p className="uppercase bg-[#f5735e] rounded text-white p-1 text-sm text-left">interview</p>
                        <p>100 top interview questions -
                            be prepared</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerAdvice;