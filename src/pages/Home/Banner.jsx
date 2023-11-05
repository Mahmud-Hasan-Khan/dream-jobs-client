import SearchBar from "./SearchBar";

const Banner = () => {
    return (
        <div>
            <div>
                <div className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/ZggNvNw/Job-Searching.jpg" className="w-full rounded" />
                    <div className="absolute -top-32 lg:top-0 flex flex-col h-screen items-center justify-center rounded gap-4">
                        <div className="flex flex-col lg:flex-row justify-between items-center bg-gradient-to-r from-[#151515bc] to-[#15151589] lg:py-16">
                            <div className="p-2 lg:p-5">
                                <h1 className="text-xl lg:text-4xl font-semibold text-white w-full ">It is your gateway to a world of career possibilities. Explore your passions, discover your <span className="font-kanit my-text">Dream Job</span></h1>
                                {/* <div className="divider"></div> */}
                                <p className="text-white text-sm lg:text-lg lg: py-2 capitalize">Explore open roles at companies hiring now.</p>
                            </div>
                            <div>
                                <SearchBar></SearchBar>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;