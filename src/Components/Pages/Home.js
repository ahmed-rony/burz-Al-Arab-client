import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <nav >
                <Link style={{color:'#fff', marginRight:'10px',fontSize:'24px'}} to='/public'>Public</Link>
                <Link style={{color:'#fff', marginRight:'10px',fontSize:'24px'}} to='/login'>Login</Link>
                <Link style={{color:'#fff', marginRight:'10px',fontSize:'24px'}} to='/admin'>Admin</Link>
                <Link style={{color:'#fff', marginRight:'10px',fontSize:'24px'}} to='/editor'>Editor</Link>
                <Link style={{color:'#fff', marginRight:'10px',fontSize:'24px'}} to='/lounge'>Lounge</Link>
                <Link style={{color:'#fff', marginRight:'10px',fontSize:'24px'}} to='/shipment'>Shipment</Link>
            </nav>
        </div>
    );
};

export default Home;