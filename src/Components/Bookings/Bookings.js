import React, { useEffect, useState } from 'react';
import useAuth from '../Hook/useAuth';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser,setLoggedInUser] = useAuth();

    useEffect(() =>{
        fetch('http://localhost:30000/bookings?email='+loggedInUser.email, {
            method: 'GET',
            headers: {
                "Content-Type" : "application/json",
                "authorization" : `Bearer ${sessionStorage.getItem('token')}`
            }
        })  // query-te logging info state dite hobe; etar khetre;
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])
    return (
        <div>
            <h2>You have: {bookings.length} booking</h2>
            {
                bookings.map(bk => 
                    <div key={bk._id} style={{borderBottom:'1px solid #fff'}}>
                        <h3>{bk.name}</h3>
                        <h3>{bk.email}</h3>
                        <h3>From: {(new Date(bk.checkIn).toDateString('dd/MM/yyyy'))}</h3>
                        <h3>To: {(new Date(bk.checkOut).toDateString('dd/MM/yyyy'))}</h3>
                        
                    </div>
                )
            }
        </div>
    );
};

export default Bookings;