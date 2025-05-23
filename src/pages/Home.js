<<<<<<< HEAD
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Box,
} from '@mui/material';
import {
  Spa as SpaIcon,
  AccessTime as AccessTimeIcon,
  Science as ScienceIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

const Home = () => {
  const features = [
    {
      icon: <SpaIcon sx={{ fontSize: 40 }} />,
      title: 'Routine Tracker',
      description: 'Easily create, view, and update your morning and evening skincare steps every day.',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      title: 'Product Tracker',
      description: 'Add products, log usage frequency, and track expiration dates for all your skincare items.',
    },
    {
      icon: <ScienceIcon sx={{ fontSize: 40 }} />,
      title: 'Ingredients Guide',
      description: 'View common ingredients, safety levels, and get brief skincare guides and tips.',
    },
    {
      icon: <PersonIcon sx={{ fontSize: 40 }} />,
      title: 'Personalized Profile',
      description: 'Set your personal details, skin type, and preferences for a tailored experience.',
    },
  ];

  return (
    <Box sx={{ background: '#f5f5f5', minHeight: '100vh', pb: 6 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          sx={{
            mt: 8,
            mb: 6,
            textAlign: 'center',
            py: 8,
            px: 2,
            backgroundColor: 'primary.main',
            color: 'white',
            borderRadius: 2,
            maxWidth: 1100,
            mx: 'auto',
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Your Skincare Journey
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Track, learn, and improve your skincare routine
          </Typography>
          <Button
            component={RouterLink}
            to="/dashboard"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 4 }}
          >
            Get Started
          </Button>
        </Box>

        {/* Features Section */}
        <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} display="flex">
                <Card
                  sx={{
                    width: '100%',
                    minHeight: 220,
                    height: 220,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    boxShadow: 3,
                    borderRadius: 2,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-6px) scale(1.03)',
                      boxShadow: 6,
                    },
                    backgroundColor: 'background.paper',
                    p: 0,
                  }}
                >
                  <Box sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    py: 3,
                    px: 2,
                  }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
                    <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ minHeight: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mb: 8, mt: 8 }}>
          <Typography variant="h4" gutterBottom>
            Ready to Transform Your Skincare Routine?
          </Typography>
          <Button
            component={RouterLink}
            to="/routine-tracker"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Start Tracking Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

=======
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Box,
} from '@mui/material';
import {
  Spa as SpaIcon,
  AccessTime as AccessTimeIcon,
  Science as ScienceIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

const Home = () => {
  const features = [
    {
      icon: <SpaIcon sx={{ fontSize: 40 }} />,
      title: 'Routine Tracker',
      description: 'Easily create, view, and update your morning and evening skincare steps every day.',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      title: 'Product Tracker',
      description: 'Add products, log usage frequency, and track expiration dates for all your skincare items.',
    },
    {
      icon: <ScienceIcon sx={{ fontSize: 40 }} />,
      title: 'Ingredients Guide',
      description: 'View common ingredients, safety levels, and get brief skincare guides and tips.',
    },
    {
      icon: <PersonIcon sx={{ fontSize: 40 }} />,
      title: 'Personalized Profile',
      description: 'Set your personal details, skin type, and preferences for a tailored experience.',
    },
  ];

  return (
    <Box sx={{ background: '#f5f5f5', minHeight: '100vh', pb: 6 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          sx={{
            mt: 8,
            mb: 6,
            textAlign: 'center',
            py: 8,
            px: 2,
            backgroundColor: 'primary.main',
            color: 'white',
            borderRadius: 2,
            maxWidth: 1100,
            mx: 'auto',
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Your Skincare Journey
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Track, learn, and improve your skincare routine
          </Typography>
          <Button
            component={RouterLink}
            to="/dashboard"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 4 }}
          >
            Get Started
          </Button>
        </Box>

        {/* Features Section */}
        <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} display="flex">
                <Card
                  sx={{
                    width: '100%',
                    minHeight: 220,
                    height: 220,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    boxShadow: 3,
                    borderRadius: 2,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-6px) scale(1.03)',
                      boxShadow: 6,
                    },
                    backgroundColor: 'background.paper',
                    p: 0,
                  }}
                >
                  <Box sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    py: 3,
                    px: 2,
                  }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
                    <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ minHeight: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mb: 8, mt: 8 }}>
          <Typography variant="h4" gutterBottom>
            Ready to Transform Your Skincare Routine?
          </Typography>
          <Button
            component={RouterLink}
            to="/routine-tracker"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Start Tracking Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

>>>>>>> a66aa756fb07c913b24beee22d18be5172c518e2
export default Home; 