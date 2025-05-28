import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Paper, Box, Button, Divider, List, ListItem, ListItemText } from '@mui/material';
import { routineService } from '../services/routineService';
import { useAuth } from '../context/AuthContext';

const RoutineDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [routine, setRoutine] = useState(null);

  useEffect(() => {
    fetchRoutine();
  }, [id, fetchRoutine]);

  const fetchRoutine = async () => {
    try {
      const data = await routineService.getRoutine(id);
      setRoutine(data);
    } catch (error) {
      console.error('Error fetching routine:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this routine?')) {
      try {
        await routineService.deleteRoutine(id);
        navigate('/routines');
      } catch (error) {
        console.error('Error deleting routine:', error);
      }
    }
  };

  const handleLike = async () => {
    try {
      await routineService.likeRoutine(id);
      fetchRoutine(); // Refresh routine data
    } catch (error) {
      console.error('Error liking routine:', error);
    }
  };

  if (!routine) {
    return <div>Loading...</div>;
  }

  const isOwner = user && routine.user._id === user._id;

  return (
    <Container>
      <Grid container spacing={4}>
        {/* Routine Header */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h4">
              {routine.name}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {isOwner ? (
                <>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => navigate(`/routines/${id}/edit`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </>
              ) : (
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleLike}
                >
                  Like ({routine.likes})
                </Button>
              )}
            </Box>
          </Box>
          <Typography variant="body1" paragraph>
            {routine.description}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Created by: {routine.user.name}
          </Typography>
        </Grid>

        {/* Routine Steps */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Routine Steps
            </Typography>
            <List>
              {routine.steps.map((step, index) => (
                <React.Fragment key={step._id}>
                  <ListItem>
                    <ListItemText
                      primary={`Step ${index + 1}: ${step.product.name}`}
                      secondary={
                        <>
                          <Typography component="span" variant="body2" color="text.primary">
                            {step.product.brand}
                          </Typography>
                          {` — ${step.instructions}`}
                        </>
                      }
                    />
                  </ListItem>
                  {index < routine.steps.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Additional Information */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Additional Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" gutterBottom>
                  Skin Type
                </Typography>
                <Typography variant="body2">
                  {routine.skinType}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" gutterBottom>
                  Time of Day
                </Typography>
                <Typography variant="body2">
                  {routine.timeOfDay}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Notes
                </Typography>
                <Typography variant="body2">
                  {routine.notes}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RoutineDetail; 