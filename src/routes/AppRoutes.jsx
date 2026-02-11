import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Shop from '../pages/Shop';
import PrivateRoute from '../components/PrivateRoute';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ActivateAccount from '../components/Registration/ActivateAccount';
import Profile from '../pages/Profile';
import DashboardLayout from '../layouts/DashboardLayout';
import ResendActivation from '../components/Registration/ResendActivation';
import ResetPassword from '../components/Registration/ResetPassword';
import ResetPasswordConfirm from '../components/Registration/ResetPasswordConfirm';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/activate/:uid/:token" element={<ActivateAccount />} />
                <Route path="/resend-activation" element={<ResendActivation />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
            </Route>
            <Route path="/dashboard" element={<PrivateRoute><DashboardLayout /></PrivateRoute>} >
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;