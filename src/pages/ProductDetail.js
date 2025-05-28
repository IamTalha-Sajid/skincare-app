import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography, Paper, Box, Rating, TextField, Button, Divider } from '@mui/material';
import { productService } from '../services/productService';
import { useAuth } from '../context/AuthContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [product, setProduct] = useState(null);
  const [review, setReview] = useState({
    rating: 5,
    comment: ''
  });

  useEffect(() => {
    fetchProduct();
  }, [id, fetchProduct]);

  const fetchProduct = async () => {
    try {
      const data = await productService.getProduct(id);
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      await productService.addReview(id, review);
      fetchProduct(); // Refresh product data to show new review
      setReview({ rating: 5, comment: '' }); // Reset form
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Grid container spacing={4}>
        {/* Product Image */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ width: '100%', height: 'auto' }}
            />
          </Paper>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h6" color="primary" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>

          <Box sx={{ my: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Brand: {product.brand}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Category: {product.category}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Skin Type: {product.skinType}
            </Typography>
          </Box>

          <Box sx={{ my: 2 }}>
            <Typography variant="h6" gutterBottom>
              Ingredients
            </Typography>
            <Typography variant="body2">
              {product.ingredients.join(', ')}
            </Typography>
          </Box>
        </Grid>

        {/* Reviews Section */}
        <Grid item xs={12}>
          <Divider sx={{ my: 4 }} />
          <Typography variant="h5" gutterBottom>
            Reviews
          </Typography>

          {/* Add Review Form */}
          {user && (
            <Paper sx={{ p: 2, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Write a Review
              </Typography>
              <form onSubmit={handleReviewSubmit}>
                <Box sx={{ mb: 2 }}>
                  <Rating
                    value={review.rating}
                    onChange={(event, newValue) => {
                      setReview(prev => ({ ...prev, rating: newValue }));
                    }}
                  />
                </Box>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  label="Your Review"
                  value={review.comment}
                  onChange={(e) => setReview(prev => ({ ...prev, comment: e.target.value }))}
                  sx={{ mb: 2 }}
                />
                <Button type="submit" variant="contained" color="primary">
                  Submit Review
                </Button>
              </form>
            </Paper>
          )}

          {/* Reviews List */}
          {product.reviews.map((review) => (
            <Paper key={review._id} sx={{ p: 2, mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Rating value={review.rating} readOnly />
                <Typography variant="subtitle2" sx={{ ml: 1 }}>
                  by {review.user.name}
                </Typography>
              </Box>
              <Typography variant="body1">{review.comment}</Typography>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail; 