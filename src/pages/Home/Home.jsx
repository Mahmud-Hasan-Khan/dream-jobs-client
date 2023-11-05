import { Helmet } from "react-helmet-async";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Dream Jobs | Get Your Dream Job</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;