import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

const RoutineTracker = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [newStep, setNewStep] = useState('');
  const [routines, setRoutines] = useState({
    morning: [],
    evening: [],
  });

  // Get token from localStorage
  const getAuthToken = () => {
    return localStorage.getItem('token');
  };

  useEffect(() => {
    const fetchRoutines = async () => {
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

        const data = await response.json();
        
        // Transform the data into morning/evening format
        const transformedData = {
          morning: data.filter(routine => routine.type === 'morning'),
          evening: data.filter(routine => routine.type === 'evening')
        };
        
        setRoutines(transformedData);
      } catch (error) {
        console.error('Error fetching routines:', error);
      }
    };

    fetchRoutines();
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleAddStep = async () => {
    if (newStep.trim()) {
      const routineType = tabValue === 0 ? 'morning' : 'evening';
      const token = getAuthToken();
      
      if (!token) {
        console.error('No authentication token found');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/routines', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            name: newStep,
            type: routineType,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to add routine');
        }
        
        const data = await response.json();
        setRoutines(prevRoutines => ({
          ...prevRoutines,
          [routineType]: [...(prevRoutines[routineType] || []), data],
        }));
        setNewStep('');
        setOpenDialog(false);
      } catch (error) {
        console.error('Error adding routine step:', error);
      }
    }
  };

  const handleToggleComplete = async (routineType, routineId) => {
    try {
      const token = getAuthToken();
      if (!token) {
        console.error('No authentication token found');
        return;
      }

      const routine = routines[routineType].find(r => r._id === routineId);
      if (!routine) return;

      const response = await fetch(`http://localhost:5000/api/routines/${routineId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...routine,
          completed: !routine.completed
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update routine');
      }
      
      const updatedRoutine = await response.json();
      setRoutines(prevRoutines => ({
        ...prevRoutines,
        [routineType]: prevRoutines[routineType].map(r =>
          r._id === routineId ? updatedRoutine : r
        ),
      }));
    } catch (error) {
      console.error('Error updating routine step:', error);
    }
  };

  const handleDeleteStep = async (routineType, routineId) => {
    try {
      const token = getAuthToken();
      if (!token) {
        console.error('No authentication token found');
        return;
      }

      const response = await fetch(`http://localhost:5000/api/routines/${routineId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete routine');
      }
      
      // Only update state if delete was successful
      setRoutines(prevRoutines => ({
        ...prevRoutines,
        [routineType]: prevRoutines[routineType].filter(r => r._id !== routineId),
      }));
    } catch (error) {
      console.error('Error deleting routine step:', error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        Routine Tracker
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            sx={{ mb: 2 }}
          >
            <Tab label="Morning Routine" />
            <Tab label="Evening Routine" />
          </Tabs>

          <List>
            {(routines[tabValue === 0 ? 'morning' : 'evening'] || []).map((routine) => (
              <ListItem
                key={routine._id}
                sx={{
                  bgcolor: 'background.paper',
                  mb: 1,
                  borderRadius: 1,
                }}
              >
                <ListItemText
                  primary={routine.name}
                  sx={{
                    textDecoration: routine.completed ? 'line-through' : 'none',
                    color: routine.completed ? 'text.secondary' : 'text.primary',
                  }}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    onClick={() => handleToggleComplete(
                      tabValue === 0 ? 'morning' : 'evening',
                      routine._id
                    )}
                    sx={{ mr: 1 }}
                  >
                    <CheckCircleIcon
                      color={routine.completed ? 'success' : 'action'}
                    />
                  </IconButton>
                  <IconButton
                    edge="end"
                    onClick={() => handleDeleteStep(
                      tabValue === 0 ? 'morning' : 'evening',
                      routine._id
                    )}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenDialog(true)}
            sx={{ mt: 2 }}
          >
            Add Step
          </Button>
        </CardContent>
      </Card>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add New Step</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Step Name"
            fullWidth
            value={newStep}
            onChange={(e) => setNewStep(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleAddStep} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default RoutineTracker; 