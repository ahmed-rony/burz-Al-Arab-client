import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Button } from '@mui/material';
import useAuth from '../Hook/useAuth';
import Bookings from '../Bookings/Bookings';

const PublicPage = () => {
    const [loggedInUser,setLoggedInUser] = useAuth();

    const [selectedDate, setSelectedDate] = useState({
        checkIn: dayjs(),
        checkOut: dayjs()
    });

    const handleCheckIn = (date) => {
        const newDate = {...selectedDate};
        newDate.checkIn = date;
        setSelectedDate(newDate);
    };
    const handleCheckOut = (date) => {
        const newDate = {...selectedDate};
        newDate.checkOut = date;
        setSelectedDate(newDate);
    };

    const handleBooking = () =>{
        const newBooking = {...loggedInUser, ...selectedDate};
        fetch('http://localhost:30000/addBooking', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(newBooking)
        })
        .then(res => res.json())  // back-end e data pathacchi, kaj hole response asbe;
        .then(data => {
            console.log(data, 'it worked');
        })
    }

    return (
        <div style={{width: '400px', margin: '0 auto'}}>
            <h1>Public Page</h1>
            <Link style={{color:'#fff', marginRight:'10px',fontSize:'24px'}} to='/'>Home</Link>
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3} style={{color:'#fff !important'}}>

                    <DesktopDatePicker
                    label="Check-In"
                    inputFormat="MM/DD/YYYY"
                    value={selectedDate.checkIn}
                    onChange={handleCheckIn}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    <MobileDatePicker
                    label="Check-Out"
                    inputFormat="MM/DD/YYYY"
                    value={selectedDate.checkOut}
                    onChange={handleCheckOut}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    
                </Stack>
                <Button onClick={handleBooking} variant="contained">Booking Now</Button>
            </LocalizationProvider>
            <Bookings></Bookings>
        </div>
    );
};

export default PublicPage;