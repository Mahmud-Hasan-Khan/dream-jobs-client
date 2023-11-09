import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import JobByCategoryCard from "./JobByCategoryCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle";

const JobByCategory = () => {

    const [jobs, setJobs] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {

        axios.get('https://dream-jobs-server-psi.vercel.app/allJobs')
            .then((res) => {
                setJobs(res.data);
            });
    }, []);

    // console.log(jobs);

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
            <div data-aos="fade-left">
                <SectionTitle heading="Job by Category" subheading="Find Your Job by Category"></SectionTitle>
            </div>
            <div>
                <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
                    <TabList className='flex items-center justify-between bg-base-200 pt-4 rounded shadow'>
                        <Tab>On Site Job</Tab>
                        <Tab>Remote Job</Tab>
                        <Tab>Hybrid</Tab>
                        <Tab>Part Time</Tab>
                        <Tab>All Jobs</Tab>
                    </TabList>

                    {['On Site', 'Remote', 'Hybrid', 'Part Time', 'All Jobs'].map((category, index) => (
                        <TabPanel key={index}>
                            <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center py-2 lg:py-6 lg:px-12 px-2">
                                {jobs
                                    .filter((job) => category === 'All Jobs' ? true : job.jobCategory === category)
                                    .map((job, index) => (<motion.div
                                        key={job._id}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                        transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: index * 0.2 }}
                                    > <JobByCategoryCard job={job} ></JobByCategoryCard> </motion.div>)
                                    )}
                            </motion.div>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </section>

    );
};

export default JobByCategory;
