import axios from "axios";
import { useEffect, useRef, useState } from "react";
import FeaturedEmployeeCard from "./FeaturedEmployeeCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle";

const FeaturedEmployee = () => {

    const [featuredEmployee, setFeaturedEmployee] = useState([]);

    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {

        axios.get('http://localhost:3000/featuredEmployee')
            .then((res) => {
                setFeaturedEmployee(res.data);
            });
    }, []);

    // console.log(featuredEmployee);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                setInView(rect.top < window.innerHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    AOS.init({
        duration: 3000,
    })

    return (
        <section ref={sectionRef}>
            <div>
                <div data-aos="fade-left">
                    <SectionTitle heading="Featured Employee" subheading="Find Your Job from Featured Employee"></SectionTitle>
                </div>

                <motion.div className="grid grid-cols-1 lg:grid-cols-4 gap-2 place-items-center py-2 lg:py-6 lg:px-10 px-2">
                    {
                        featuredEmployee.map((employeeData, index) => (<motion.div
                            key={employeeData._id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: index * 0.2 }}
                        >
                            <FeaturedEmployeeCard employeeData={employeeData} ></FeaturedEmployeeCard> </motion.div>))
                    }
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedEmployee;
