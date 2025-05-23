import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Avatar,
} from '@mui/material';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    skinType: 'Combination',
    skinConcerns: ['Acne', 'Dryness', 'Uneven texture'],
    preferences: {
      fragranceFree: true,
      crueltyFree: true,
      vegan: false,
    },
  });

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(profile);

  const skinTypes = [
    'Normal',
    'Dry',
    'Oily',
    'Combination',
    'Sensitive',
  ];

  const skinConcerns = [
    'Acne',
    'Aging',
    'Dark spots',
    'Dryness',
    'Oiliness',
    'Redness',
    'Uneven texture',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePreferenceChange = (preference) => {
    setFormData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [preference]: !prev.preferences[preference],
      },
    }));
  };

  const handleSave = () => {
    setProfile(formData);
    setEditing(false);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        Profile
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Avatar
              sx={{ width: 100, height: 100, mr: 3 }}
              src="/path-to-profile-image.jpg"
            />
            <Box>
              <Typography variant="h5">{profile.name}</Typography>
              <Typography color="text.secondary">{profile.email}</Typography>
            </Box>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Personal Information
              </Typography>
              {editing ? (
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </Grid>
                </Grid>
              ) : (
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Name</Typography>
                    <Typography>{profile.name}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Email</Typography>
                    <Typography>{profile.email}</Typography>
                  </Grid>
                </Grid>
              )}
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Skin Profile
              </Typography>
              {editing ? (
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Skin Type</InputLabel>
                      <Select
                        name="skinType"
                        value={formData.skinType}
                        onChange={handleInputChange}
                        label="Skin Type"
                      >
                        {skinTypes.map((type) => (
                          <MenuItem key={type} value={type}>
                            {type}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" gutterBottom>
                      Skin Concerns
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {skinConcerns.map((concern) => (
                        <Chip
                          key={concern}
                          label={concern}
                          onClick={() => {
                            const concerns = formData.skinConcerns.includes(concern)
                              ? formData.skinConcerns.filter((c) => c !== concern)
                              : [...formData.skinConcerns, concern];
                            setFormData((prev) => ({
                              ...prev,
                              skinConcerns: concerns,
                            }));
                          }}
                          color={formData.skinConcerns.includes(concern) ? 'primary' : 'default'}
                        />
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              ) : (
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Skin Type</Typography>
                    <Typography>{profile.skinType}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">Skin Concerns</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                      {profile.skinConcerns.map((concern) => (
                        <Chip key={concern} label={concern} />
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              )}
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Preferences
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {Object.entries(profile.preferences).map(([key, value]) => (
                  <Chip
                    key={key}
                    label={key.replace(/([A-Z])/g, ' $1').trim()}
                    color={value ? 'primary' : 'default'}
                    onClick={() => editing && handlePreferenceChange(key)}
                    sx={{ textTransform: 'capitalize' }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            {editing ? (
              <>
                <Button onClick={() => setEditing(false)}>Cancel</Button>
                <Button variant="contained" onClick={handleSave}>
                  Save Changes
                </Button>
              </>
            ) : (
              <Button variant="contained" onClick={() => setEditing(true)}>
                Edit Profile
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile; 