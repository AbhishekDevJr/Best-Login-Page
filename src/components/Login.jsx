import React from 'react'
import { TextField, Button, Box, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Custom Logic
  };

  return (
    <div className="container-login min-w-[100vw] min-h-[100vh] flex justify-center items-center bg-[#EBEFF3]">
      <Box style={{ outline: "1px solid #fff", padding: '20px', backgroundColor: '#fff', borderRadius: "5px" }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="Username"
            control={control}
            rules={{
              required: "Username is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid Username"
              }
            }}
            render={({ field }) =>
              <TextField
                {...field}
                label="Username"
                type="text"
                fullWidth
                margin="normal"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              pattern: {
                value: /^[ A-Za-z0-9_@./#&+-]*$/,
                message: "Password contains invalid characters"
              }
            }}
            render={({ field }) =>
              <TextField
                {...field}
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />}
          />
          <div className='flex flex-col'>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} style={{ marginInline: '4px', padding: '5px', background: '#333333', color: '#F5F5F5', borderRadius: '5px' }}>
              Sign In
            </Button>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} style={{ marginInline: '4px', padding: '5px', background: '#333333', color: '#F5F5F5', borderRadius: '5px' }}>
              Register
            </Button>
          </div>
        </form>
        <Typography variant="body2" align="left" sx={{ mt: 2 }}>
          <Button variant="text" color="primary" onClick={() => navigate('/register')} sx={{ textTransform: 'none' }}>
            Forgot password?
          </Button>
        </Typography>
      </Box>
    </div>
  );
}

export default Login;