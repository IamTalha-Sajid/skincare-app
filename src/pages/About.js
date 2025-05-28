import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
  Link,
  Divider,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Spa as SpaIcon,
  LocalPharmacy as ProductIcon,
  Timeline as TimelineIcon,
} from '@mui/icons-material';

const About = () => {
  const features = [
    {
      title: 'Routine Tracking',
      description: 'Create and manage your personalized morning and evening skincare routines. Track your progress, maintain consistency, and achieve your skincare goals with our intuitive tracking system.',
      icon: <TimelineIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'Product Management',
      description: 'Organize and monitor your skincare products with detailed tracking. Keep track of ingredients, expiration dates, and usage patterns to optimize your skincare collection effectively.',
      icon: <ProductIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'Skincare Education',
      description: 'Access comprehensive information about skincare ingredients and routines. Learn about product benefits, ingredient interactions, and get personalized recommendations for your skin.',
      icon: <SpaIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          About Skincare App
        </Typography>

        <Card sx={{ mb: 6 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom color="primary">
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              At Skincare App, we believe that everyone deserves to have healthy, glowing skin. Our mission is to simplify the skincare journey by providing tools and knowledge that make it easier to maintain consistent, effective skincare routines.
            </Typography>
            <Typography variant="body1" paragraph>
              We understand that navigating the world of skincare can be overwhelming. With countless products, ingredients, and routines to choose from, it's easy to feel lost. That's why we've created a comprehensive platform that helps you track your routines, manage your products, and learn about skincare in an accessible way.
            </Typography>
          </CardContent>
        </Card>

        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          Key Features
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom align="center">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 6 }} />

        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom color="primary">
              Why Choose Us?
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>
                  🎯 Personalized Experience
                </Typography>
                <Typography variant="body2" paragraph>
                  Our app adapts to your unique skincare needs, providing customized recommendations and tracking features.
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                  📱 User-Friendly Interface
                </Typography>
                <Typography variant="body2" paragraph>
                  Designed with simplicity in mind, our interface makes it easy to manage your skincare routine and products.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>
                  📚 Educational Resources
                </Typography>
                <Typography variant="body2" paragraph>
                  Access comprehensive information about skincare ingredients, routines, and best practices.
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                  🔔 Smart Notifications
                </Typography>
                <Typography variant="body2" paragraph>
                  Stay on top of your skincare routine with timely reminders and product expiration alerts.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ mt: 6 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom color="primary">
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph>
              Have questions, suggestions, or feedback? We'd love to hear from you! Our team is dedicated to improving your skincare journey and is always here to help.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
              <Link href="mailto:contact@skincareapp.com" color="primary">
                <EmailIcon sx={{ fontSize: 30 }} />
              </Link>
              <Link href="https://github.com/your-username/skincare-app" target="_blank" rel="noopener" color="primary">
                <GitHubIcon sx={{ fontSize: 30 }} />
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default About; 