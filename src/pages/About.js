<<<<<<< HEAD
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
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
} from '@mui/icons-material';

const About = () => {
  const teamMembers = [
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      bio: 'Passionate about creating user-friendly applications and skincare enthusiast.',
      avatar: '/path-to-avatar-1.jpg',
      github: 'https://github.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      email: 'jane.smith@example.com',
    },
    {
      name: 'John Doe',
      role: 'UI/UX Designer',
      bio: 'Dedicated to creating beautiful and intuitive user interfaces.',
      avatar: '/path-to-avatar-2.jpg',
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      email: 'john.doe@example.com',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        About Our Project
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography paragraph>
            The Skincare App was created with a simple mission: to help people take better care of their skin
            by making skincare routines more manageable and educational. We believe that everyone deserves
            to have healthy, glowing skin, and we're here to make that journey easier.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            What We Offer
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Routine Tracking
                  </Typography>
                  <Typography variant="body2">
                    Keep track of your morning and evening skincare routines, ensuring you never miss a step.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Product Management
                  </Typography>
                  <Typography variant="body2">
                    Organize your skincare products, track their usage, and get notified about expiring items.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Educational Resources
                  </Typography>
                  <Typography variant="body2">
                    Learn about skincare ingredients and get personalized tips for your skin type.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
        Meet the Team
      </Typography>

      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    src={member.avatar}
                    sx={{ width: 80, height: 80, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6">{member.name}</Typography>
                    <Typography color="text.secondary">{member.role}</Typography>
                  </Box>
                </Box>
                <Typography paragraph>{member.bio}</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Link href={member.github} target="_blank" rel="noopener">
                    <GitHubIcon />
                  </Link>
                  <Link href={member.linkedin} target="_blank" rel="noopener">
                    <LinkedInIcon />
                  </Link>
                  <Link href={`mailto:${member.email}`}>
                    <EmailIcon />
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography paragraph>
            Have questions, suggestions, or feedback? We'd love to hear from you!
          </Typography>
          <Typography>
            Email us at:{' '}
            <Link href="mailto:contact@skincareapp.com">
              contact@skincareapp.com
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

=======
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
} from '@mui/icons-material';

const About = () => {
  const teamMembers = [
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      bio: 'Passionate about creating user-friendly applications and skincare enthusiast.',
      avatar: '/path-to-avatar-1.jpg',
      github: 'https://github.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      email: 'jane.smith@example.com',
    },
    {
      name: 'John Doe',
      role: 'UI/UX Designer',
      bio: 'Dedicated to creating beautiful and intuitive user interfaces.',
      avatar: '/path-to-avatar-2.jpg',
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      email: 'john.doe@example.com',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        About Our Project
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography paragraph>
            The Skincare App was created with a simple mission: to help people take better care of their skin
            by making skincare routines more manageable and educational. We believe that everyone deserves
            to have healthy, glowing skin, and we're here to make that journey easier.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            What We Offer
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Routine Tracking
                  </Typography>
                  <Typography variant="body2">
                    Keep track of your morning and evening skincare routines, ensuring you never miss a step.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Product Management
                  </Typography>
                  <Typography variant="body2">
                    Organize your skincare products, track their usage, and get notified about expiring items.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Educational Resources
                  </Typography>
                  <Typography variant="body2">
                    Learn about skincare ingredients and get personalized tips for your skin type.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
        Meet the Team
      </Typography>

      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    src={member.avatar}
                    sx={{ width: 80, height: 80, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6">{member.name}</Typography>
                    <Typography color="text.secondary">{member.role}</Typography>
                  </Box>
                </Box>
                <Typography paragraph>{member.bio}</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Link href={member.github} target="_blank" rel="noopener">
                    <GitHubIcon />
                  </Link>
                  <Link href={member.linkedin} target="_blank" rel="noopener">
                    <LinkedInIcon />
                  </Link>
                  <Link href={`mailto:${member.email}`}>
                    <EmailIcon />
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography paragraph>
            Have questions, suggestions, or feedback? We'd love to hear from you!
          </Typography>
          <Typography>
            Email us at:{' '}
            <Link href="mailto:contact@skincareapp.com">
              contact@skincareapp.com
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

>>>>>>> a66aa756fb07c913b24beee22d18be5172c518e2
export default About; 