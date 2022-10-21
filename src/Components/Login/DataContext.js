import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <DataContext.Provider value={[loggedInUser, setLoggedInUser]}>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContext;