import React, { useState } from 'react'
import { TextField, Button, Box, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const user = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []

    const onSubmit = (data) => {
        // Custom Logic
        const currUser = user.find((item) => item.username === data.username);
        if (currUser) {
            localStorage.setItem('showUser', JSON.stringify(currUser));
            setTimeout(() => navigate('/show-password'), 1000);
        }
        else {
            toast.error(`No user found with username ${data.username}`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    return (
        <div className='container-reset-password min-w-[100vw] min-h-[100vh] flex justify-center items-center bg-[#EBEFF3]'>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                // pauseOnHover
                theme="dark"
            // transition: Bounce
            />
            <Box sx={{ width: "480px" }} style={{ outline: "1px solid #fff", padding: '20px', backgroundColor: '#fff', borderRadius: "5px" }}>
                <Typography variant="h4" gutterBottom>
                    Reset Password
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="username"
                        control={control}
                        rules={{
                            required: "Your Username is required",
                        }}
                        render={({ field }) =>
                            <TextField
                                {...field}
                                label="Your Username"
                                type="text"
                                fullWidth
                                margin="normal"
                                error={!!errors.username}
                                helperText={errors.username ? errors.username.message : ""}
                            />}
                    />
                    <div className='flex flex-col'>
                        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} style={{ marginInline: '4px', padding: '5px', background: '#333333', color: '#F5F5F5', borderRadius: '5px' }}>
                            Next
                        </Button>
                    </div>
                </form>
            </Box>
        </div>
    );
}

export default ResetPassword;