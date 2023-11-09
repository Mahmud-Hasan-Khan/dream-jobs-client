import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import JobByCategory from "./JobByCategory";
import FeaturedEmployee from "./FeaturedEmployee";
import CareerAdvice from "./CareerAdvice";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Dream Jobs | Get Your Dream Job</title>
            </Helmet>
            <Banner></Banner>
            <JobByCategory></JobByCategory>
            <FeaturedEmployee></FeaturedEmployee>
            <CareerAdvice></CareerAdvice>
        </div>
    );
};

export default Home;
