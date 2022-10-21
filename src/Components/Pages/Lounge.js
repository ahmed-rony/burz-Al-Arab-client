import React from 'react';
import { Link } from 'react-router-dom';

const Lounge = () => {
    return (
        <div>
            <h1>Lounge</h1>
            <Link style={{color:'#fff', marginRight:'10px',fontSize:'24px'}} to='/'>Home</Link>
        </div>
    );
};

export default Lounge;