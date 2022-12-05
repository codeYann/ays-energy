import React from 'react';
import { LockOutlined } from '@mui/icons-material';
import {
  Container,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';

import './index.css';

export default function Login() {
  return (
    <Container component="main" maxWidth="xs" className="container-login">
      <div className="login-area">
        <div className="login-header">
          <Avatar sx={{ bgcolor: 'red' }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        </div>

        <form noValidate>
          <TextField
            autoFocus
            required
            fullWidth
            variant="outlined"
            margin="normal"
            label="Email address"
            id="email"
            name="email"
            autoComplete="email"
          />
          <TextField
            autoFocus
            required
            fullWidth
            variant="outlined"
            margin="normal"
            label="Password"
            id="password"
            name="password"
            autoComplete="current-password"
            type="password"
          />
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Button fullWidth variant="contained" color="primary" type="submit">
            Sign in
          </Button>
        </form>
      </div>
    </Container>
  );
}
