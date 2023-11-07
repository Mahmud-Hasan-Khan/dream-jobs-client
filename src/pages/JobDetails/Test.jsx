import React, { useState } from "react";
import Modal from "react-modal";
import moment from "moment";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const JobDetails = () => {
    // ...

    // Define state to control the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="card w-[700px] mx-auto py-4">
            {/* ... (previous JSX) */}
            <div className="flex justify-center pb-2">
                <button className="bg-[#f97316] hover:bg-[#ff9416] text-white px-3 py-2 rounded-md font-medium flex items-center" onClick={openModal}>Apply Now</button>
            </div>

            {/* Create a modal for the application form */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Apply Modal"
            >
                {/* Modal content here */}
                <h2>Apply for the Job</h2>
                <form>
                    <input type="text" value={displayName} readOnly />
                    <input type="text" value={email} readOnly />
                    <input type="text" placeholder="Resume Link" />
                    <button onClick={handleApplyJob}>Submit Application</button>
                </form>
            </Modal>
        </div>
    );
};

export default JobDetails;
