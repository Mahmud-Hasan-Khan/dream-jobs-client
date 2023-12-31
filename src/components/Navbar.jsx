import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from '../hook/useAuth';
import { toast } from "react-hot-toast";
import logoImg from '../assets/image/Logo_dream.png'

const Navbar = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    // theme setting
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const handleChangeTheme = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const myTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", myTheme);
    }, [theme])

    const handleLogout = async () => {

        try {
            await logOut();
            toast.success('Logout successful');
            // console.log('user login');
            navigate(location?.state ? location?.state : "/")
        }
        catch (err) {
            toast.error(err.message);
        }
    }

    const navLinks = <div className='space-y-2'>
        <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'rounded-full my-bg text-white font-medium' : 'text-base rounded-full shadow-md border-b-2 border-[#00d260] my-text px-2 py-1')}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/allJobs" className={({ isActive }) => (isActive ? 'rounded-full my-bg text-white' : 'text-base rounded-full shadow-md border-b-2 border-[#00d260] my-text px-2 py-1')}>All Jobs</NavLink>
        </li>
        <li>
            <NavLink to="/appliedJobs" className={({ isActive }) => (isActive ? 'rounded-full my-bg text-white' : 'text-base rounded-full shadow-md border-b-2 border-[#00d260] my-text px-2 py-1')}>Applied Jobs</NavLink>
        </li>
        <li>
            <NavLink to="/addAJob" className={({ isActive }) => (isActive ? 'rounded-full my-bg text-white' : 'text-base rounded-full shadow-md border-b-2 border-[#00d260] my-text px-2 py-1')}>Add A Job</NavLink>
        </li>
        <li>
            <NavLink to="/myJobs" className={({ isActive }) => (isActive ? 'rounded-full my-bg text-white' : 'text-base rounded-full shadow-md border-b-2 border-[#00d260] my-text px-2 py-1')}>My Jobs</NavLink>
        </li>
        <li>
            <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'rounded-full my-bg text-white' : 'text-base rounded-full shadow-md border-b-2 border-[#00d260] my-text px-2 py-1')}>Blogs</NavLink>
        </li>
    </div>

    return (
        <div className="navbar shadow rounded-md sticky top-0 z-10 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/"><img className='w-32 lg:w-36' src={logoImg} alt="logo" /> </Link>
            </div>
            <div className="navbar-center hidden lg:block">
                <ul className="menu menu-horizontal space-x-2 font-medium text-[#00AEEF]">
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'rounded-full my-bg text-white font-medium' : 'text-base rounded-full shadow-md border-b-2 border-[#00d260] my-text px-2 py-1')}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/allJobs" className={({ isActive }) => (isActive ? 'rounded-full my-bg text-white' : 'text-base rounded-full shadow-md border-b-2 border-[#00d260] my-text px-2 py-1')}>All Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/appliedJobs" className={({ isActive }) => (isActive ? 'rounded-full my-bg text-white' : 'text-base rounded-full shadow-md border-b-2 border-[#00d260] my-text px-2 py-1')}>Applied Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/addAJob" className={({ isActive }) => (isActive ? 'rounded-full my-bg text-white' : 'text-base rounded-full shadow-md border-b-2 border-[#00d260] my-text px-2 py-1')}>Add A Job</NavLink>
                    </li>
                    <li>
                        <NavLink to="/myJobs" className={({ isActive }) => (isActive ? 'rounded-full my-bg text-white' : 'text-base rounded-full shadow-md border-b-2 border-[#00d260] my-text px-2 py-1')}>My Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'rounded-full my-bg text-white' : 'text-base rounded-full shadow-md border-b-2 border-[#00d260] my-text px-2 py-1')}>Blogs</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end space-x-1 lg:space-x-2 mr-3 lg:mr-0">
                {
                    user ?
                        <>
                            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                <img
                                    className='rounded-full'
                                    src={user?.photoURL}
                                    alt='profile'
                                    height='38'
                                    width='38'
                                />
                            </div>
                            <Link onClick={handleLogout} className='btn-login-logout' to="/login">Logout</Link>
                        </>
                        :
                        <>
                            <Link className='btn-login-logout' to="/login">Login</Link>
                        </>
                }
                <div>
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleChangeTheme} checked={theme === "light" ? false : true} />

                        {/* sun icon */}
                        <svg className="swap-on fill-yellow-400 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-[#00d260] w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;