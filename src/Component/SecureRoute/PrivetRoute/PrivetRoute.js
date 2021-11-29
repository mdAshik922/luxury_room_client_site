import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    let location = useLocation();
    const { user,  isLoading } = useAuth();
    if (isLoading) { return <Spinner /> }
    if(user.email){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} />
};

export default PrivetRoute;