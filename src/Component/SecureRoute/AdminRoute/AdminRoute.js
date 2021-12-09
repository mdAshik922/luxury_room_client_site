
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, loading } = useAuth();
    const location = useLocation();
    if (loading) { return <Spinner /> };
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;

};

export default AdminRoute;