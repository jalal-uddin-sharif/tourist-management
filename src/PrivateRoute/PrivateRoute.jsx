import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider';
import Loader from '../component/Loader';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const loaction = useLocation()
    if(user){
        return children;
    }
    if(loading){
        return <Loader/>
    }
    return <Navigate state={loaction.pathname} to={"/login"}/>
};

export default PrivateRoute;