<<<<<<< HEAD
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Box,
  Tabs,
  Tab,
  Link,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would handle authentication
    if (tabValue === 0) {
      // Login
      console.log('Login:', formData);
      navigate('/dashboard');
    } else {
      // Sign up
      console.log('Sign up:', formData);
      navigate('/dashboard');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: 4,
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
              Welcome Back
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" paragraph>
              {tabValue === 0
                ? 'Sign in to continue your skincare journey'
                : 'Create an account to start tracking your skincare routine'}
            </Typography>

            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              centered
              sx={{ mb: 3 }}
            >
              <Tab label="Sign In" />
              <Tab label="Sign Up" />
            </Tabs>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                margin="normal"
                required
              />
              {tabValue === 1 && (
                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                />
              )}

              {tabValue === 0 && (
                <Box sx={{ textAlign: 'right', mt: 1 }}>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Box>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{ mt: 3, mb: 2 }}
              >
                {tabValue === 0 ? 'Sign In' : 'Sign Up'}
              </Button>

              {tabValue === 0 && (
                <>
                  <Divider sx={{ my: 2 }}>OR</Divider>
                  <Button
                    fullWidth
                    variant="outlined"
                    size="large"
                    sx={{ mb: 2 }}
                  >
                    Continue with Google
                  </Button>
                </>
              )}
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

=======
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Box,
  Tabs,
  Tab,
  Link,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would handle authentication
    if (tabValue === 0) {
      // Login
      console.log('Login:', formData);
      navigate('/dashboard');
    } else {
      // Sign up
      console.log('Sign up:', formData);
      navigate('/dashboard');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: 4,
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
              Welcome Back
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" paragraph>
              {tabValue === 0
                ? 'Sign in to continue your skincare journey'
                : 'Create an account to start tracking your skincare routine'}
            </Typography>

            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              centered
              sx={{ mb: 3 }}
            >
              <Tab label="Sign In" />
              <Tab label="Sign Up" />
            </Tabs>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                margin="normal"
                required
              />
              {tabValue === 1 && (
                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                />
              )}

              {tabValue === 0 && (
                <Box sx={{ textAlign: 'right', mt: 1 }}>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Box>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{ mt: 3, mb: 2 }}
              >
                {tabValue === 0 ? 'Sign In' : 'Sign Up'}
              </Button>

              {tabValue === 0 && (
                <>
                  <Divider sx={{ my: 2 }}>OR</Divider>
                  <Button
                    fullWidth
                    variant="outlined"
                    size="large"
                    sx={{ mb: 2 }}
                  >
                    Continue with Google
                  </Button>
                </>
              )}
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

>>>>>>> a66aa756fb07c913b24beee22d18be5172c518e2
export default Login; 