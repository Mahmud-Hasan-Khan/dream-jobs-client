import { useEffect, useState } from 'react';
import axios from 'axios';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './JobByCategory.css';
import PropTypes from 'prop-types';
import JobByCategoryCard from './JobByCategoryCard';
import SectionTitle from '../../components/SectionTitle';

function JobByCategory() {
    const [jobs, setJobs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/categories')
            .then((response) => {
                setCategories(response.data);
            });

        axios.get('http://localhost:3000/jobs')
            .then((response) => {
                setJobs(response.data);
            });
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="bg-base-100 shadow">
            <SectionTitle heading={'Job by Category'} subheading={'Find your job by category'}></SectionTitle>
            <Tabs>
                <TabList className='flex items-center justify-between bg-base-200 pt-4 rounded shadow'>
                    {categories.map((category) => (
                        <Tab
                            key={category._id}
                            onClick={() => handleCategoryChange(category.jobCategory)}
                            selectedClassName="activeTab"
                            className="bg-gray-300 px-2 py-1 rounded-t-lg"
                        >
                            {category.jobCategory}
                        </Tab>
                    ))}
                    <Tab
                        onClick={() => handleCategoryChange('')} selectedClassName="activeTab"
                        className="bg-gray-300 px-2 py-1 rounded-t-lg border border-gray-300 cursor-pointer"
                    >
                        All Jobs
                    </Tab>
                </TabList>
                {categories.map((category) => (
                    <TabPanel key={category._id}>
                        <JobList jobs={jobs.filter((job) => job.jobCategory === category.jobCategory)} />
                    </TabPanel>
                ))}
                <TabPanel>
                    <JobList jobs={selectedCategory ? jobs.filter((job) => job.jobCategory === selectedCategory) : jobs} />
                </TabPanel>
            </Tabs>
        </div>
    );
}

function JobList({ jobs }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center py-2 lg:py-6 lg:px-12 px-2">
            {
                jobs.map(jobData => <JobByCategoryCard key={jobData._id} jobData={jobData} ></JobByCategoryCard>)
            }
        </div>
    );
}

JobList.propTypes = {
    jobs: PropTypes.array
}

export default JobByCategory;
