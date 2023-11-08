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
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateJob from "../pages/UpdateJob/UpdateJob";


const MyCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/jobDetails/:id',
                element: <PrivateRoute>
                    <JobDetails></JobDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/jobUpdate/:id',
                element: <UpdateJob></UpdateJob>,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/allJobs',
                element: <AllJobs />
            },
            {
                path: '/appliedJobs',
                element: <PrivateRoute>
                    <AppliedJobs />
                </PrivateRoute>
            },
            {
                path: '/addAJob',
                element: <PrivateRoute>
                    <AddAJob />
                </PrivateRoute>
            },
            {
                path: '/myJobs',
                element: <PrivateRoute>
                    <MyJobs />
                </PrivateRoute>
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