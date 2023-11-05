import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllJobs from "../pages/Jobs/AllJobs";
import AppliedJobs from "../pages/Jobs/AppliedJobs";
import AddAJob from "../pages/Jobs/AddAJob";
import MyJobs from "../pages/Jobs/MyJobs";
import Blogs from "../pages/Blogs/Blogs";

const MyCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allJobs',
                element: <AllJobs />
            },
            {
                path: '/appliedJobs',
                element: <AppliedJobs />
            },
            {
                path: '/addAJob',
                element: <AddAJob />
            },
            {
                path: '/myJobs',
                element: <MyJobs />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default MyCreatedRouter;