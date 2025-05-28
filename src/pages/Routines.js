import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';
import { routineService } from '../services/routineService';
import { useAuth } from '../context/AuthContext';

const Routines = () => {
  const { user } = useAuth();
  const [routines, setRoutines] = useState([]);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    fetchRoutines();
  }, [tabValue, fetchRoutines]);

  const fetchRoutines = async () => {
    try {
      const data = tabValue === 0
        ? await routineService.getMyRoutines()
        : await routineService.getPublicRoutines();
      setRoutines(data);
    } catch (error) {
      console.error('Error fetching routines:', error);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleLike = async (routineId) => {
    try {
      await routineService.likeRoutine(routineId);
      fetchRoutines(); // Refresh routines after liking
    } catch (error) {
      console.error('Error liking routine:', error);
    }
  };

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">
          Routines
        </Typography>
        {user && (
          <Button
            component={Link}
            to="/create-routine"
            variant="contained"
            color="primary"
          >
            Create New Routine
          </Button>
        )}
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="My Routines" />
          <Tab label="Public Routines" />
        </Tabs>
      </Box>

      <Grid container spacing={3}>
        {routines.map((routine) => (
          <Grid item xs={12} md={6} key={routine._id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {routine.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {routine.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    Created by: {routine.user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {routine.likes} likes
                  </Typography>
                </Box>
                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <Button
                    component={Link}
                    to={`/routines/${routine._id}`}
                    variant="outlined"
                    color="primary"
                  >
                    View Details
                  </Button>
                  {tabValue === 1 && (
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleLike(routine._id)}
                    >
                      Like
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Routines; 