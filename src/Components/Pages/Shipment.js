import React from 'react';
import { Link } from 'react-router-dom';

const Shipment = () => {
    return (
        <div>
            <h1>Shipment</h1>
            <Link style={{color:'#fff', marginRight:'10px',fontSize:'24px'}} to='/'>Home</Link>
        </div>
    );
};

export default Shipment;