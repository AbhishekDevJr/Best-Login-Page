import React, { useEffect } from 'react'
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function ShowPassword() {
    const navigate = useNavigate();
    const currUser = localStorage.getItem('showUser') ? JSON.parse(localStorage.getItem('showUser')) : {};

    const setUserPass = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

    useEffect(() => {
        setUserPass.forEach((item) => {
            if (item.username === currUser.username) {
                item.password = item.realPassword;
            }
        });
        localStorage.setItem('users', JSON.stringify(setUserPass));
        return () => {
            localStorage.removeItem('showUser');
        };
    }, []);

    return (
        <div className='container-show-password min-w-[100vw] min-h-[100vh] flex justify-center items-center bg-[#EBEFF3]'>
            <Box sx={{ width: "480px" }} style={{ outline: "1px solid #fff", padding: '20px', backgroundColor: '#fff', borderRadius: "5px" }}>
                <Typography variant="h4" gutterBottom>
                    Password Reset
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Temporary new password for {'user1'} :
                </Typography>

                <TextField
                    value={currUser?.realPassword ? currUser.realPassword : ''}
                    InputProps={{
                        readOnly: true,
                        disableUnderline: true,
                        style: {
                            fontFamily: 'monospace',
                            backgroundColor: '#EBEFF3',
                            borderRadius: 4,
                            padding: 8,
                        },
                    }}
                    variant="standard"
                    fullWidth
                />

                <p style={{ lineHeight: '16px', marginTop: '10px', fontSize: '14px', color: '#2B2B2B' }}>
                    For security reasons, we recommend that you update this temporary password in your profile as soon as possible.
                </p>
                <Typography variant="body2" align="left" sx={{ mt: 2 }}>
                    <Button variant="text" color="primary" onClick={() => navigate('/signin')} sx={{ textTransform: 'none' }}>
                        Back to main page
                    </Button>
                </Typography>
            </Box>
        </div>
    );
}

export default ShowPassword;