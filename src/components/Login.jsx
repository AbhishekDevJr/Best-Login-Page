import React from 'react'
import { TextField, Button, Box, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

  const onSubmit = (data, event) => {
    // Custom Logic
    const action = event.nativeEvent.submitter.value;
    console.log('data', data, action);
    const loginUser = users.find((item) => item.username === data.username);

    if (action === 'signin') {
      if (loginUser) {
        if (loginUser.password === data.password) {
          //Handle Successfull Login
          navigate('/dashboard');
        }
      } else {
        //
        toast.error(`Failed to login. Please check your username & password.`, {
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
    } else if (action === 'register') {
      if (loginUser && data.username === loginUser.username) {
        toast.error(`User with this username already exists.`, {
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
      else {
        const currentUser = {
          username: data.username,
          password: data.password
        }

        const updateUserList = [...users, currentUser];
        localStorage.setItem('users', JSON.stringify(updateUserList));

        toast.success(`User registered successully.`, {
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
    }
  };

  return (
    <div className="container-login min-w-[100vw] min-h-[100vh] flex justify-center items-center bg-[#EBEFF3]">
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
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            rules={{
              required: "Username is required",
              // pattern: {
              //   value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              //   message: "Enter a valid Username"
              // }
            }}
            render={({ field }) =>
              <TextField
                {...field}
                label="Username"
                type="text"
                fullWidth
                margin="normal"
                error={!!errors.username}
                helperText={errors.username ? errors.username.message : ""}
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
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} style={{ marginInline: '4px', padding: '5px', background: '#333333', color: '#F5F5F5', borderRadius: '5px' }} name="action"
              value="signin">
              Sign In
            </Button>
            <Button type="submit" variant="contained" color="secondary" fullWidth sx={{ mt: 2 }} style={{ marginInline: '4px', padding: '5px', background: '#333333', color: '#F5F5F5', borderRadius: '5px' }} name="action"
              value="register">
              Register
            </Button>
          </div>
        </form>
        <Typography variant="body2" align="left" sx={{ mt: 2 }}>
          <Button variant="text" color="primary" onClick={() => navigate('/reset-password')} sx={{ textTransform: 'none' }}>
            Forgot password?
          </Button>
        </Typography>
      </Box>
    </div>
  );
}

export default Login;