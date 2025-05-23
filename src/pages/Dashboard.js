<<<<<<< HEAD
import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  LinearProgress,
  Card,
  CardContent,
} from '@mui/material';
import {
  WbSunny as MorningIcon,
  NightsStay as EveningIcon,
  CheckCircle as CompletedIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

const Dashboard = () => {
  // Mock data - in a real app, this would come from your state management
  const stats = {
    morningRoutine: {
      completed: 5,
      total: 7,
      lastCompleted: 'Today, 8:30 AM',
    },
    eveningRoutine: {
      completed: 3,
      total: 7,
      lastCompleted: 'Yesterday, 10:15 PM',
    },
    products: {
      total: 12,
      expiring: 2,
    },
  };

  const calculateProgress = (completed, total) => {
    return (completed / total) * 100;
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        Your Skincare Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Morning Routine Card */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <MorningIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">Morning Routine</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Progress this week
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={calculateProgress(stats.morningRoutine.completed, stats.morningRoutine.total)}
                  sx={{ mt: 1 }}
                />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {stats.morningRoutine.completed} of {stats.morningRoutine.total} completed
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Last completed: {stats.morningRoutine.lastCompleted}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Evening Routine Card */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EveningIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">Evening Routine</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Progress this week
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={calculateProgress(stats.eveningRoutine.completed, stats.eveningRoutine.total)}
                  sx={{ mt: 1 }}
                />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {stats.eveningRoutine.completed} of {stats.eveningRoutine.total} completed
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Last completed: {stats.eveningRoutine.lastCompleted}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Product Summary Card */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Product Summary
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <CompletedIcon sx={{ color: 'success.main', fontSize: 40 }} />
                    <Typography variant="h4">{stats.products.total}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Total Products
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <WarningIcon sx={{ color: 'warning.main', fontSize: 40 }} />
                    <Typography variant="h4">{stats.products.expiring}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Expiring Soon
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

=======
import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  LinearProgress,
  Card,
  CardContent,
} from '@mui/material';
import {
  WbSunny as MorningIcon,
  NightsStay as EveningIcon,
  CheckCircle as CompletedIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

const Dashboard = () => {
  // Mock data - in a real app, this would come from your state management
  const stats = {
    morningRoutine: {
      completed: 5,
      total: 7,
      lastCompleted: 'Today, 8:30 AM',
    },
    eveningRoutine: {
      completed: 3,
      total: 7,
      lastCompleted: 'Yesterday, 10:15 PM',
    },
    products: {
      total: 12,
      expiring: 2,
    },
  };

  const calculateProgress = (completed, total) => {
    return (completed / total) * 100;
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        Your Skincare Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Morning Routine Card */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <MorningIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">Morning Routine</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Progress this week
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={calculateProgress(stats.morningRoutine.completed, stats.morningRoutine.total)}
                  sx={{ mt: 1 }}
                />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {stats.morningRoutine.completed} of {stats.morningRoutine.total} completed
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Last completed: {stats.morningRoutine.lastCompleted}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Evening Routine Card */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EveningIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">Evening Routine</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Progress this week
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={calculateProgress(stats.eveningRoutine.completed, stats.eveningRoutine.total)}
                  sx={{ mt: 1 }}
                />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {stats.eveningRoutine.completed} of {stats.eveningRoutine.total} completed
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Last completed: {stats.eveningRoutine.lastCompleted}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Product Summary Card */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Product Summary
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <CompletedIcon sx={{ color: 'success.main', fontSize: 40 }} />
                    <Typography variant="h4">{stats.products.total}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Total Products
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <WarningIcon sx={{ color: 'warning.main', fontSize: 40 }} />
                    <Typography variant="h4">{stats.products.expiring}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Expiring Soon
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

>>>>>>> a66aa756fb07c913b24beee22d18be5172c518e2
export default Dashboard; 