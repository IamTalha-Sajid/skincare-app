import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { routineService } from '../services/routineService';
import { productService } from '../services/productService';

const CreateRoutine = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    skinType: '',
    timeOfDay: '',
    notes: '',
    steps: []
  });
  const [selectedProduct, setSelectedProduct] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await productService.getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddStep = () => {
    if (!selectedProduct || !instructions) return;

    const product = products.find(p => p._id === selectedProduct);
    setFormData(prev => ({
      ...prev,
      steps: [...prev.steps, { product, instructions }]
    }));
    setSelectedProduct('');
    setInstructions('');
  };

  const handleRemoveStep = (index) => {
    setFormData(prev => ({
      ...prev,
      steps: prev.steps.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await routineService.createRoutine(formData);
      navigate('/routines');
    } catch (error) {
      console.error('Error creating routine:', error);
    }
  };

  return (
    <Container>
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Create New Routine
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Routine Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={3}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Skin Type</InputLabel>
                <Select
                  name="skinType"
                  value={formData.skinType}
                  onChange={handleChange}
                  label="Skin Type"
                  required
                >
                  <MenuItem value="dry">Dry</MenuItem>
                  <MenuItem value="oily">Oily</MenuItem>
                  <MenuItem value="combination">Combination</MenuItem>
                  <MenuItem value="normal">Normal</MenuItem>
                  <MenuItem value="sensitive">Sensitive</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Time of Day</InputLabel>
                <Select
                  name="timeOfDay"
                  value={formData.timeOfDay}
                  onChange={handleChange}
                  label="Time of Day"
                  required
                >
                  <MenuItem value="morning">Morning</MenuItem>
                  <MenuItem value="evening">Evening</MenuItem>
                  <MenuItem value="both">Both</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                multiline
                rows={2}
              />
            </Grid>

            {/* Add Steps Section */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Add Steps
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <FormControl sx={{ flex: 1 }}>
                  <InputLabel>Product</InputLabel>
                  <Select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    label="Product"
                  >
                    {products.map((product) => (
                      <MenuItem key={product._id} value={product._id}>
                        {product.name} - {product.brand}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  sx={{ flex: 1 }}
                  label="Instructions"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                />
                <Button
                  variant="contained"
                  onClick={handleAddStep}
                  disabled={!selectedProduct || !instructions}
                >
                  Add Step
                </Button>
              </Box>

              <List>
                {formData.steps.map((step, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={step.product.name}
                      secondary={step.instructions}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleRemoveStep(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={formData.steps.length === 0}
              >
                Create Routine
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateRoutine; 