import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <Link style={{color:'#fff', marginRight:'10px',fontSize:'24px'}} to='/'>Home</Link>
        </div>
    );
};

export default AdminPage;