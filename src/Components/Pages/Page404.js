import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <h2>It doesn't exist</h2>
            <h2>Boooooooooom!!</h2>
            <Link style={{color:'#fff', marginRight:'10px',fontSize:'24px'}} to='/'>Home</Link>
        </div>
    );
};

export default Page404;