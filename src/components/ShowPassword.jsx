import React from 'react'
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function ShowPassword() {
    const navigate = useNavigate();

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
                    value="nI&@M1m0b0bD"
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