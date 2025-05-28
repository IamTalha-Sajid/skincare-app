import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, Box, Avatar } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    skinType: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || '',
        email: user.email || '',
        skinType: user.skinType || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile({ skinType: formData.skinType });
      setMessage('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      setMessage('Error updating profile. Please try again.');
      console.error('Error updating profile:', error);
    }
  };

  return (
    <Container>
      <Grid container spacing={4}>
        {/* Profile Header */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 3 }}>
            <Avatar sx={{ width: 100, height: 100 }} />
            <Box>
              <Typography variant="h4" gutterBottom>
                {formData.username}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {formData.email}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Profile Form */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5">
                Profile Information
              </Typography>
              <Button
                variant="outlined"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </Button>
            </Box>

            {message && (
              <Typography
                color={message.includes('Error') ? 'error' : 'success'}
                sx={{ mb: 2 }}
              >
                {message}
              </Typography>
            )}

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    value={formData.username}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Skin Type"
                    name="skinType"
                    value={formData.skinType}
                    onChange={handleChange}
                    disabled={!isEditing}
                    select
                    SelectProps={{
                      native: true
                    }}
                  >
                    <option value="">Select Skin Type</option>
                    <option value="dry">Dry</option>
                    <option value="oily">Oily</option>
                    <option value="combination">Combination</option>
                    <option value="normal">Normal</option>
                    <option value="sensitive">Sensitive</option>
                  </TextField>
                </Grid>
                {isEditing && (
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Save Changes
                    </Button>
                  </Grid>
                )}
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile; 