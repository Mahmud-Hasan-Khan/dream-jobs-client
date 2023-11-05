import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const { error } = useRouteError();
    return (
        <div className='flex items-center h-screen p-16 text-gray-900 bg-[#f1f5f9]'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <img className='cover rounded-lg my-4' src="https://i.ibb.co/Ld1j9wL/404page.gif" alt="Error Image" />
                <div className='max-w-md text-center'>
                    <p className='text-2xl font-semibold md:text-3xl mb-4 text-red-500'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className="btn-dream"
                    >
                        Back To Home Page
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;