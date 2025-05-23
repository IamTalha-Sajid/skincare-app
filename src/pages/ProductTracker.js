<<<<<<< HEAD
import React, { useState } from 'react';
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
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

const ProductTracker = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Gentle Cleanser',
      brand: 'CeraVe',
      category: 'Cleanser',
      expiryDate: '2024-12-31',
      usageFrequency: 'Daily',
      notes: 'Morning and evening use',
    },
    {
      id: 2,
      name: 'Hydrating Toner',
      brand: 'Hada Labo',
      category: 'Toner',
      expiryDate: '2024-10-15',
      usageFrequency: 'Daily',
      notes: 'Morning use only',
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    category: '',
    expiryDate: '',
    usageFrequency: '',
    notes: '',
  });

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
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveProduct = () => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...formData, id: p.id } : p));
    } else {
      const newProduct = {
        ...formData,
        id: Math.max(...products.map(p => p.id)) + 1,
      };
      setProducts([...products, newProduct]);
    }
    handleCloseDialog();
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  const isExpiringSoon = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30;
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1">
          Product Tracker
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add Product
        </Button>
      </Box>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Typography variant="h6" component="div">
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
                <Typography color="text.secondary" gutterBottom>
                  {product.brand}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Category: {product.category}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Usage: {product.usageFrequency}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Expiry: {new Date(product.expiryDate).toLocaleDateString()}
                </Typography>
                {product.notes && (
                  <Typography variant="body2" color="text.secondary">
                    Notes: {product.notes}
                  </Typography>
                )}
              </CardContent>
              <CardActions>
                <IconButton
                  size="small"
                  onClick={() => handleOpenDialog(product)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingProduct ? 'Edit Product' : 'Add New Product'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Product Name"
                fullWidth
                value={formData.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="brand"
                label="Brand"
                fullWidth
                value={formData.brand}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="category"
                label="Category"
                fullWidth
                value={formData.category}
                onChange={handleInputChange}
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="usageFrequency"
                label="Usage Frequency"
                fullWidth
                value={formData.usageFrequency}
                onChange={handleInputChange}
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
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveProduct} variant="contained">
            {editingProduct ? 'Save Changes' : 'Add Product'}
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
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

const ProductTracker = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Gentle Cleanser',
      brand: 'CeraVe',
      category: 'Cleanser',
      expiryDate: '2024-12-31',
      usageFrequency: 'Daily',
      notes: 'Morning and evening use',
    },
    {
      id: 2,
      name: 'Hydrating Toner',
      brand: 'Hada Labo',
      category: 'Toner',
      expiryDate: '2024-10-15',
      usageFrequency: 'Daily',
      notes: 'Morning use only',
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    category: '',
    expiryDate: '',
    usageFrequency: '',
    notes: '',
  });

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
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveProduct = () => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...formData, id: p.id } : p));
    } else {
      const newProduct = {
        ...formData,
        id: Math.max(...products.map(p => p.id)) + 1,
      };
      setProducts([...products, newProduct]);
    }
    handleCloseDialog();
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  const isExpiringSoon = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30;
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1">
          Product Tracker
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add Product
        </Button>
      </Box>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Typography variant="h6" component="div">
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
                <Typography color="text.secondary" gutterBottom>
                  {product.brand}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Category: {product.category}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Usage: {product.usageFrequency}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Expiry: {new Date(product.expiryDate).toLocaleDateString()}
                </Typography>
                {product.notes && (
                  <Typography variant="body2" color="text.secondary">
                    Notes: {product.notes}
                  </Typography>
                )}
              </CardContent>
              <CardActions>
                <IconButton
                  size="small"
                  onClick={() => handleOpenDialog(product)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingProduct ? 'Edit Product' : 'Add New Product'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Product Name"
                fullWidth
                value={formData.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="brand"
                label="Brand"
                fullWidth
                value={formData.brand}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="category"
                label="Category"
                fullWidth
                value={formData.category}
                onChange={handleInputChange}
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="usageFrequency"
                label="Usage Frequency"
                fullWidth
                value={formData.usageFrequency}
                onChange={handleInputChange}
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
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveProduct} variant="contained">
            {editingProduct ? 'Save Changes' : 'Add Product'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

>>>>>>> a66aa756fb07c913b24beee22d18be5172c518e2
export default ProductTracker; 