

const AllJobList = ({ jobData, refetch }) => {
    return (
        <div className="lg:mt-14">
            <Helmet>
                <title>Gadget World :: MyCart</title>
            </Helmet>
            <SectionTitle heading={"Your Added Products"} subheading={"Shop Your Desired Product from Here"}></SectionTitle>
            <div className="max-w-5xl mx-auto">
                <h4 className="text-center text-lg text-[#ac52b4] font-medium">Total Product {carts.length}</h4>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#00AEEF] text-white text-base font-normal ">
                                <th>Serial</th>
                                <th>Product Name</th>
                                <th>Product Type</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                carts.map(cart => <tr key={cart._id}>
                                    <th>{serial++}</th>
                                    <td>{cart.name}</td>
                                    <td>{cart?.type}</td>
                                    <td>${cart?.price}</td>
                                    <td><button onClick={() => handleDeleteCart(cart._id)} className="bg-red-500 hover:bg-[#00AEEF] p-2 rounded"> <MdOutlineDeleteOutline className="text-xl text-white"></MdOutlineDeleteOutline> </button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllJobList;