import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../Hook/useAuth';


const PrivateRoute = ({children, ...rest}) => {
  const [loggedInUser] = useAuth();
  const location = useLocation(); 
  return (
    loggedInUser.email
    ? <Outlet />
    : <Navigate to='/login' state={{ from : location }} replace />
  )
};

export default PrivateRoute;
