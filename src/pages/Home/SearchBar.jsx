import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons

const SearchBar = () => {
    const [data, setData] = useState([]); // Replace with your data source
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        // Implement your search logic here
        // You can filter or search through your data based on the query
        // and update the state accordingly.
    };

    const filteredData = data.filter(item => item.includes(searchQuery)); // Replace this with your data filtering logic

    return (
        <div className="container mx-auto py-2 lg:py-6">
            <h1 className='text-white lg:text-3xl lg:px-3 lg:py-2 font-medium'>One Search, Millions of Jobs</h1>
            <div className="w-full px-3 lg:mb-6 md:mb-0 relative flex items-center gap-2 justify-center">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Job Title, Skill, or Company"
                        className=" lg:w-96 px-5 py-3 border rounded-md border-gray-300 focus:outline-[#00d260] bg-base-200 text-gray-900 pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FaSearch className="text-gray-400" />
                    </div>
                </div>
                <button
                    className="md:ml-2 bg-[#f97316] hover:bg-[#ff9416] text-white font-medium py-3 px-4 rounded-lg"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <div>
                {filteredData.map((item, index) => (
                    <div key={index} className="my-2 p-2 border border-gray-300 rounded-lg">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
