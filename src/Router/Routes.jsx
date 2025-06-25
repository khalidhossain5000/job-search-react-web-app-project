import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CompanyDetails from "../Pages/CompanyDetails";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyProfile from "../Pages/MyProfile";
import PrivateRoute from "../Provider/PrivateRoute";
import DynamicRoutesError from "../Pages/DynamicRoutesError";
import Loading from "../components/Loading/loading";
import ContactUs from "../Pages/ContactUs";
import ForgerPassword from "../Pages/ForgerPassword";
import UpdateProfile from "../Pages/UpdateProfile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'company-details/:id',
                element: <PrivateRoute>
                    <CompanyDetails></CompanyDetails>
                </PrivateRoute>,
                loader: () => fetch('/company-data.json'),
                errorElement: <DynamicRoutesError />,
                hydrateFallbackElement: <Loading />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            { path: '/auth/login', element: <Login></Login> },
            { path: '/auth/register', element: <Register></Register> },
            { path: '/auth/forget-password', element: <ForgerPassword></ForgerPassword> },
            { path: '/auth/update-profile', element: <UpdateProfile></UpdateProfile> },
            {
                path: '/auth/my-profile',
                element: <PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>
            },
        ]
    },
    {
        path:'contact-us',
        element:<ContactUs/>
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])