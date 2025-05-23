<<<<<<< HEAD
import React, { useState } from 'react';
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
    morning: [
      { id: 1, name: 'Cleanser', completed: true },
      { id: 2, name: 'Toner', completed: false },
      { id: 3, name: 'Serum', completed: false },
      { id: 4, name: 'Moisturizer', completed: false },
      { id: 5, name: 'Sunscreen', completed: false },
    ],
    evening: [
      { id: 1, name: 'Makeup Remover', completed: true },
      { id: 2, name: 'Cleanser', completed: true },
      { id: 3, name: 'Toner', completed: false },
      { id: 4, name: 'Treatment', completed: false },
      { id: 5, name: 'Moisturizer', completed: false },
    ],
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleAddStep = () => {
    if (newStep.trim()) {
      const routineType = tabValue === 0 ? 'morning' : 'evening';
      const newId = Math.max(...routines[routineType].map(step => step.id)) + 1;
      setRoutines({
        ...routines,
        [routineType]: [...routines[routineType], { id: newId, name: newStep, completed: false }],
      });
      setNewStep('');
      setOpenDialog(false);
    }
  };

  const handleToggleComplete = (routineType, stepId) => {
    setRoutines({
      ...routines,
      [routineType]: routines[routineType].map(step =>
        step.id === stepId ? { ...step, completed: !step.completed } : step
      ),
    });
  };

  const handleDeleteStep = (routineType, stepId) => {
    setRoutines({
      ...routines,
      [routineType]: routines[routineType].filter(step => step.id !== stepId),
    });
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
            {routines[tabValue === 0 ? 'morning' : 'evening'].map((step) => (
              <ListItem
                key={step.id}
                sx={{
                  bgcolor: 'background.paper',
                  mb: 1,
                  borderRadius: 1,
                }}
              >
                <ListItemText
                  primary={step.name}
                  sx={{
                    textDecoration: step.completed ? 'line-through' : 'none',
                    color: step.completed ? 'text.secondary' : 'text.primary',
                  }}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    onClick={() => handleToggleComplete(
                      tabValue === 0 ? 'morning' : 'evening',
                      step.id
                    )}
                    sx={{ mr: 1 }}
                  >
                    <CheckCircleIcon
                      color={step.completed ? 'success' : 'action'}
                    />
                  </IconButton>
                  <IconButton
                    edge="end"
                    onClick={() => handleDeleteStep(
                      tabValue === 0 ? 'morning' : 'evening',
                      step.id
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

=======
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Tabs,
  Tab,
  Box,
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
  Edit as EditIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

const RoutineTracker = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [newStep, setNewStep] = useState('');
  const [routines, setRoutines] = useState({
    morning: [
      { id: 1, name: 'Cleanser', completed: true },
      { id: 2, name: 'Toner', completed: false },
      { id: 3, name: 'Serum', completed: false },
      { id: 4, name: 'Moisturizer', completed: false },
      { id: 5, name: 'Sunscreen', completed: false },
    ],
    evening: [
      { id: 1, name: 'Makeup Remover', completed: true },
      { id: 2, name: 'Cleanser', completed: true },
      { id: 3, name: 'Toner', completed: false },
      { id: 4, name: 'Treatment', completed: false },
      { id: 5, name: 'Moisturizer', completed: false },
    ],
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleAddStep = () => {
    if (newStep.trim()) {
      const routineType = tabValue === 0 ? 'morning' : 'evening';
      const newId = Math.max(...routines[routineType].map(step => step.id)) + 1;
      setRoutines({
        ...routines,
        [routineType]: [...routines[routineType], { id: newId, name: newStep, completed: false }],
      });
      setNewStep('');
      setOpenDialog(false);
    }
  };

  const handleToggleComplete = (routineType, stepId) => {
    setRoutines({
      ...routines,
      [routineType]: routines[routineType].map(step =>
        step.id === stepId ? { ...step, completed: !step.completed } : step
      ),
    });
  };

  const handleDeleteStep = (routineType, stepId) => {
    setRoutines({
      ...routines,
      [routineType]: routines[routineType].filter(step => step.id !== stepId),
    });
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
            {routines[tabValue === 0 ? 'morning' : 'evening'].map((step) => (
              <ListItem
                key={step.id}
                sx={{
                  bgcolor: 'background.paper',
                  mb: 1,
                  borderRadius: 1,
                }}
              >
                <ListItemText
                  primary={step.name}
                  sx={{
                    textDecoration: step.completed ? 'line-through' : 'none',
                    color: step.completed ? 'text.secondary' : 'text.primary',
                  }}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    onClick={() => handleToggleComplete(
                      tabValue === 0 ? 'morning' : 'evening',
                      step.id
                    )}
                    sx={{ mr: 1 }}
                  >
                    <CheckCircleIcon
                      color={step.completed ? 'success' : 'action'}
                    />
                  </IconButton>
                  <IconButton
                    edge="end"
                    onClick={() => handleDeleteStep(
                      tabValue === 0 ? 'morning' : 'evening',
                      step.id
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

>>>>>>> a66aa756fb07c913b24beee22d18be5172c518e2
export default RoutineTracker; 