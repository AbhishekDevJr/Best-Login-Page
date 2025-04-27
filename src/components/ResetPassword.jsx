import React from 'react'
import { TextField, Button, Box, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // Custom Logic
        navigate('/show-password')
    };

    return (
        <div className='container-reset-password min-w-[100vw] min-h-[100vh] flex justify-center items-center bg-[#EBEFF3]'>
            <Box sx={{ width: "480px" }} style={{ outline: "1px solid #fff", padding: '20px', backgroundColor: '#fff', borderRadius: "5px" }}>
                <Typography variant="h4" gutterBottom>
                    Reset Password
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="Username"
                        control={control}
                        rules={{
                            required: "Your Username is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Enter a valid Username"
                            }
                        }}
                        render={({ field }) =>
                            <TextField
                                {...field}
                                label="Your Username"
                                type="text"
                                fullWidth
                                margin="normal"
                                error={!!errors.email}
                                helperText={errors.email ? errors.email.message : ""}
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