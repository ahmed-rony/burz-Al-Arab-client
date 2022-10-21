import React, { useContext } from 'react';
import DataContext from '../Login/DataContext';

const useAuth = () => {
    return useContext(DataContext)
};

export default useAuth;