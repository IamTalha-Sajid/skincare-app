<<<<<<< HEAD
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Tabs,
  Tab,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Science as ScienceIcon,
  Lightbulb as LightbulbIcon,
} from '@mui/icons-material';

const IngredientsTips = () => {
  const [tabValue, setTabValue] = useState(0);

  const ingredients = [
    {
      name: 'Hyaluronic Acid',
      category: 'Hydrating',
      description: 'A powerful humectant that can hold up to 1000 times its weight in water.',
      benefits: ['Deep hydration', 'Plumping effect', 'Suitable for all skin types'],
      safety: 'Low risk',
    },
    {
      name: 'Niacinamide',
      category: 'Brightening',
      description: 'A form of vitamin B3 that helps improve skin texture and tone.',
      benefits: ['Reduces inflammation', 'Minimizes pores', 'Strengthens skin barrier'],
      safety: 'Low risk',
    },
    {
      name: 'Retinol',
      category: 'Anti-aging',
      description: 'A derivative of vitamin A that promotes cell turnover.',
      benefits: ['Reduces fine lines', 'Improves skin texture', 'Fades dark spots'],
      safety: 'Moderate risk',
    },
  ];

  const skincareTips = [
    {
      title: 'Basic Skincare Steps',
      content: [
        'Cleanse your face twice daily',
        'Apply toner to balance pH',
        'Use treatment products (serums, etc.)',
        'Moisturize to lock in hydration',
        'Apply sunscreen during the day',
      ],
    },
    {
      title: 'Skin Type Guide',
      content: [
        'Dry Skin: Focus on hydration and gentle cleansing',
        'Oily Skin: Use oil-free products and regular exfoliation',
        'Combination Skin: Balance hydration and oil control',
        'Sensitive Skin: Use fragrance-free, gentle products',
      ],
    },
    {
      title: 'Common Mistakes to Avoid',
      content: [
        'Over-exfoliating your skin',
        'Skipping sunscreen',
        'Using too many active ingredients at once',
        'Not patch testing new products',
        'Sleeping with makeup on',
      ],
    },
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        Ingredients & Tips
      </Typography>

      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        centered
        sx={{ mb: 4 }}
      >
        <Tab icon={<ScienceIcon />} label="Ingredients Guide" />
        <Tab icon={<LightbulbIcon />} label="Skincare Tips" />
      </Tabs>

      {tabValue === 0 ? (
        <Grid container spacing={3}>
          {ingredients.map((ingredient, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6">{ingredient.name}</Typography>
                    <Chip
                      label={ingredient.safety}
                      color={ingredient.safety === 'Low risk' ? 'success' : 'warning'}
                      size="small"
                    />
                  </Box>
                  <Typography color="text.secondary" gutterBottom>
                    Category: {ingredient.category}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {ingredient.description}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Benefits:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {ingredient.benefits.map((benefit, idx) => (
                      <Chip
                        key={idx}
                        label={benefit}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box>
          {skincareTips.map((tip, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{tip.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box component="ul" sx={{ pl: 2 }}>
                  {tip.content.map((item, idx) => (
                    <Typography component="li" key={idx} paragraph>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )}
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
  Tabs,
  Tab,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Science as ScienceIcon,
  Lightbulb as LightbulbIcon,
} from '@mui/icons-material';

const IngredientsTips = () => {
  const [tabValue, setTabValue] = useState(0);

  const ingredients = [
    {
      name: 'Hyaluronic Acid',
      category: 'Hydrating',
      description: 'A powerful humectant that can hold up to 1000 times its weight in water.',
      benefits: ['Deep hydration', 'Plumping effect', 'Suitable for all skin types'],
      safety: 'Low risk',
    },
    {
      name: 'Niacinamide',
      category: 'Brightening',
      description: 'A form of vitamin B3 that helps improve skin texture and tone.',
      benefits: ['Reduces inflammation', 'Minimizes pores', 'Strengthens skin barrier'],
      safety: 'Low risk',
    },
    {
      name: 'Retinol',
      category: 'Anti-aging',
      description: 'A derivative of vitamin A that promotes cell turnover.',
      benefits: ['Reduces fine lines', 'Improves skin texture', 'Fades dark spots'],
      safety: 'Moderate risk',
    },
  ];

  const skincareTips = [
    {
      title: 'Basic Skincare Steps',
      content: [
        'Cleanse your face twice daily',
        'Apply toner to balance pH',
        'Use treatment products (serums, etc.)',
        'Moisturize to lock in hydration',
        'Apply sunscreen during the day',
      ],
    },
    {
      title: 'Skin Type Guide',
      content: [
        'Dry Skin: Focus on hydration and gentle cleansing',
        'Oily Skin: Use oil-free products and regular exfoliation',
        'Combination Skin: Balance hydration and oil control',
        'Sensitive Skin: Use fragrance-free, gentle products',
      ],
    },
    {
      title: 'Common Mistakes to Avoid',
      content: [
        'Over-exfoliating your skin',
        'Skipping sunscreen',
        'Using too many active ingredients at once',
        'Not patch testing new products',
        'Sleeping with makeup on',
      ],
    },
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        Ingredients & Tips
      </Typography>

      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        centered
        sx={{ mb: 4 }}
      >
        <Tab icon={<ScienceIcon />} label="Ingredients Guide" />
        <Tab icon={<LightbulbIcon />} label="Skincare Tips" />
      </Tabs>

      {tabValue === 0 ? (
        <Grid container spacing={3}>
          {ingredients.map((ingredient, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6">{ingredient.name}</Typography>
                    <Chip
                      label={ingredient.safety}
                      color={ingredient.safety === 'Low risk' ? 'success' : 'warning'}
                      size="small"
                    />
                  </Box>
                  <Typography color="text.secondary" gutterBottom>
                    Category: {ingredient.category}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {ingredient.description}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Benefits:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {ingredient.benefits.map((benefit, idx) => (
                      <Chip
                        key={idx}
                        label={benefit}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box>
          {skincareTips.map((tip, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{tip.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box component="ul" sx={{ pl: 2 }}>
                  {tip.content.map((item, idx) => (
                    <Typography component="li" key={idx} paragraph>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )}
    </Container>
  );
};

>>>>>>> a66aa756fb07c913b24beee22d18be5172c518e2
export default IngredientsTips; 