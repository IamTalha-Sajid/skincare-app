import React, { useState, useEffect, useCallback } from 'react';
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
  const [stats, setStats] = useState({
    morningRoutine: {
      completed: 0,
      total: 0,
      lastCompleted: '',
    },
    eveningRoutine: {
      completed: 0,
      total: 0,
      lastCompleted: '',
    },
    products: {
      total: 0,
      expiring: 0,
    },
  });

  // Get token from localStorage
  const getAuthToken = useCallback(() => {
    return localStorage.getItem('token');
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const token = getAuthToken();
      if (!token) {
        console.error('No authentication token found');
        return;
      }

      const response = await fetch('http://localhost:5000/api/routines/my-routines', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch routines');
      }

      const routines = await response.json();
      
      // Calculate stats from routines
      const morningRoutines = routines.filter(r => r.type === 'morning');
      const eveningRoutines = routines.filter(r => r.type === 'evening');
      
      const stats = {
        morningRoutine: {
          completed: morningRoutines.filter(r => r.completed).length,
          total: morningRoutines.length,
          lastCompleted: morningRoutines.find(r => r.completed)?.updatedAt || '',
        },
        eveningRoutine: {
          completed: eveningRoutines.filter(r => r.completed).length,
          total: eveningRoutines.length,
          lastCompleted: eveningRoutines.find(r => r.completed)?.updatedAt || '',
        },
        products: {
          total: 0, // You'll need to implement product fetching
          expiring: 0, // You'll need to implement product fetching
        },
      };

      setStats(stats);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  }, [getAuthToken]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const calculateProgress = (completed, total) => {
    if (total === 0) return 0;
    return (completed / total) * 100;
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString();
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
                Last completed: {formatDate(stats.morningRoutine.lastCompleted)}
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
                Last completed: {formatDate(stats.eveningRoutine.lastCompleted)}
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

export default Dashboard; 