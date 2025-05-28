import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, TextField, MenuItem, Box } from '@mui/material';
import { productService } from '../services/productService';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    skinType: '',
    minPrice: '',
    maxPrice: '',
    sort: ''
  });

  useEffect(() => {
    fetchProducts();
  }, [filters, fetchProducts]);

  const fetchProducts = async () => {
    try {
      const data = await productService.getAllProducts(filters);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>

      {/* Filters */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              select
              fullWidth
              name="category"
              label="Category"
              value={filters.category}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="cleanser">Cleanser</MenuItem>
              <MenuItem value="toner">Toner</MenuItem>
              <MenuItem value="serum">Serum</MenuItem>
              <MenuItem value="moisturizer">Moisturizer</MenuItem>
              <MenuItem value="sunscreen">Sunscreen</MenuItem>
              <MenuItem value="mask">Mask</MenuItem>
              <MenuItem value="treatment">Treatment</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              select
              fullWidth
              name="skinType"
              label="Skin Type"
              value={filters.skinType}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="dry">Dry</MenuItem>
              <MenuItem value="oily">Oily</MenuItem>
              <MenuItem value="combination">Combination</MenuItem>
              <MenuItem value="normal">Normal</MenuItem>
              <MenuItem value="sensitive">Sensitive</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              name="minPrice"
              label="Min Price"
              type="number"
              value={filters.minPrice}
              onChange={handleFilterChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              name="maxPrice"
              label="Max Price"
              type="number"
              value={filters.maxPrice}
              onChange={handleFilterChange}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Products Grid */}
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.imageUrl}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.brand}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rating: {product.rating.toFixed(1)}/5
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products; 