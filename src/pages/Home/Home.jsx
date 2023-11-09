import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import JobByCategory from "./JobByCategory";
import Working from "./Working";
import FeaturedEmployee from "./FeaturedEmployee";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Dream Jobs | Get Your Dream Job</title>
            </Helmet>
            <Banner></Banner>
            <JobByCategory></JobByCategory>
            <FeaturedEmployee></FeaturedEmployee>
            {/* <Working></Working> */}
        </div>
    );
};

export default Home;
