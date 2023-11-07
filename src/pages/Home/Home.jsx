import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import JobByCategory from "./JobByCategory";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Dream Jobs | Get Your Dream Job</title>
            </Helmet>
            <Banner></Banner>
            <JobByCategory></JobByCategory>
        </div>
    );
};

export default Home;
