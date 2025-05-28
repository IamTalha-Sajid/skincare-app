import React, { useState, useEffect, useCallback } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Chip,
  Box,
  Alert,
  Snackbar,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

const ProductTracker = () => {
  const categories = [
    { value: 'cleanser', label: 'Cleanser' },
    { value: 'toner', label: 'Toner' },
    { value: 'serum', label: 'Serum' },
    { value: 'moisturizer', label: 'Moisturizer' },
    { value: 'sunscreen', label: 'Sunscreen' },
    { value: 'mask', label: 'Mask' },
    { value: 'treatment', label: 'Treatment' },
  ];

  const [products, setProducts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    category: '',
    price: '',
    description: '',
    imageUrl: '',
    expiryDate: '',
    usageFrequency: '',
    notes: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get token from localStorage
  const getAuthToken = useCallback(() => {
    return localStorage.getItem('token');
  }, []);

  // Fetch products from the backend
  const fetchProducts = useCallback(async () => {
    try {
      const token = getAuthToken();
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch('http://localhost:5000/api/products', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [getAuthToken]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleOpenDialog = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData(product);
    } else {
      setEditingProduct(null);
      setFormData({
        name: '',
        brand: '',
        category: '',
        price: '',
        description: '',
        imageUrl: '',
        expiryDate: '',
        usageFrequency: '',
        notes: '',
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingProduct(null);
    setError(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveProduct = async () => {
    try {
      // Validate required fields
      if (!formData.name || !formData.brand || !formData.category || 
          !formData.price || !formData.description || !formData.imageUrl) {
        throw new Error('Please fill in all required fields');
      }

      const token = getAuthToken();
      if (!token) {
        throw new Error('No authentication token found');
      }

      // Convert expiryDate to ISO string if not empty
      let expiryDateToSend = formData.expiryDate;
      if (expiryDateToSend) {
        expiryDateToSend = new Date(expiryDateToSend).toISOString();
      }

      const url = editingProduct
        ? `http://localhost:5000/api/products/${editingProduct._id}`
        : 'http://localhost:5000/api/products';

      const response = await fetch(url, {
        method: editingProduct ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          expiryDate: expiryDateToSend
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save product');
      }

      await fetchProducts();
      handleCloseDialog();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const token = getAuthToken();
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      await fetchProducts();
    } catch (error) {
      setError(error.message);
    }
  };

  const isExpiringSoon = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30;
  };

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Typography variant="h6" sx={{ mt: 4 }}>Loading products...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mt: 4, 
        mb: 4,
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2
      }}>
        <Typography variant="h4" component="h1" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          Product Tracker
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
          sx={{ minWidth: { xs: '100%', sm: 'auto' } }}
        >
          Add Product
        </Button>
      </Box>

      {error && (
        <Snackbar 
          open={!!error} 
          autoHideDuration={6000} 
          onClose={() => setError(null)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity="error" onClose={() => setError(null)}>
            {error}
          </Alert>
        </Snackbar>
      )}

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              '&:hover': {
                boxShadow: 6,
                transform: 'translateY(-4px)',
                transition: 'all 0.3s ease-in-out'
              }
            }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  mb: 2
                }}>
                  <Typography variant="h6" component="div" sx={{ 
                    fontWeight: 'bold',
                    fontSize: { xs: '1rem', sm: '1.25rem' }
                  }}>
                    {product.name}
                  </Typography>
                  {isExpiringSoon(product.expiryDate) && (
                    <Chip
                      icon={<WarningIcon />}
                      label="Expiring Soon"
                      color="warning"
                      size="small"
                    />
                  )}
                </Box>
                <Typography color="text.secondary" gutterBottom sx={{ mb: 1 }}>
                  {product.brand}
                </Typography>
                <Box sx={{ mb: 1 }}>
                  <Chip 
                    label={product.category} 
                    size="small" 
                    color="primary" 
                    variant="outlined"
                    sx={{ mr: 1 }}
                  />
                  <Chip 
                    label={`$${product.price}`} 
                    size="small" 
                    color="secondary" 
                    variant="outlined"
                  />
                </Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Usage: {product.usageFrequency}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Expiry: {product.expiryDate && !isNaN(new Date(product.expiryDate))
                    ? new Date(product.expiryDate).toLocaleDateString()
                    : 'N/A'}
                </Typography>
                {product.notes && (
                  <Typography variant="body2" color="text.secondary">
                    Notes: {product.notes}
                  </Typography>
                )}
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
                <IconButton
                  size="small"
                  onClick={() => handleOpenDialog(product)}
                  sx={{ '&:hover': { color: 'primary.main' } }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={() => handleDeleteProduct(product._id)}
                  sx={{ '&:hover': { color: 'error.main' } }}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog} 
        maxWidth="sm" 
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: 24
          }
        }}
      >
        <DialogTitle sx={{ 
          borderBottom: '1px solid',
          borderColor: 'divider',
          pb: 2
        }}>
          {editingProduct ? 'Edit Product' : 'Add New Product'}
        </DialogTitle>
        <DialogContent sx={{ pt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Product Name"
                fullWidth
                value={formData.name}
                onChange={handleInputChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="brand"
                label="Brand"
                fullWidth
                value={formData.brand}
                onChange={handleInputChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="category"
                label="Category"
                select
                fullWidth
                value={formData.category}
                onChange={handleInputChange}
                required
                variant="outlined"
                SelectProps={{
                  displayEmpty: true,
                  MenuProps: {
                    PaperProps: {
                      sx: {
                        maxHeight: 300
                      }
                    }
                  }
                }}
                InputLabelProps={{ shrink: true }}
              >
                <MenuItem value="" disabled>
                  <em>Select Category</em>
                </MenuItem>
                {categories.map((cat) => (
                  <MenuItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="price"
                label="Price"
                type="number"
                fullWidth
                value={formData.price}
                onChange={handleInputChange}
                required
                variant="outlined"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                label="Description"
                fullWidth
                multiline
                rows={2}
                value={formData.description}
                onChange={handleInputChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="imageUrl"
                label="Image URL"
                fullWidth
                value={formData.imageUrl}
                onChange={handleInputChange}
                required
                variant="outlined"
                helperText="Enter a URL for the product image"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="expiryDate"
                label="Expiry Date"
                type="date"
                fullWidth
                value={formData.expiryDate}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="usageFrequency"
                label="Usage Frequency"
                fullWidth
                value={formData.usageFrequency}
                onChange={handleInputChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="notes"
                label="Notes"
                fullWidth
                multiline
                rows={2}
                value={formData.notes}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ 
          px: 3, 
          py: 2,
          borderTop: '1px solid',
          borderColor: 'divider'
        }}>
          <Button 
            onClick={handleCloseDialog}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSaveProduct} 
            variant="contained"
          >
            {editingProduct ? 'Save Changes' : 'Add Product'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ProductTracker; 