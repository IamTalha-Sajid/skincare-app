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
      description:
        'A powerful humectant that attracts and retains moisture in the skin, helping to keep it plump, hydrated, and smooth throughout the day.',
      benefits: [
        'Deeply hydrates and plumps the skin',
        'Improves skin elasticity and texture',
        'Suitable for all skin types, even sensitive',
      ],
      safety: 'Low risk',
    },
    {
      name: 'Niacinamide',
      category: 'Brightening',
      description:
        'A form of vitamin B3 that helps strengthen the skin barrier, improve uneven tone, and reduce the appearance of pores and redness.',
      benefits: [
        'Evens out skin tone and brightens',
        'Minimizes enlarged pores and redness',
        'Strengthens the natural skin barrier',
      ],
      safety: 'Low risk',
    },
    {
      name: 'Retinol',
      category: 'Anti-aging',
      description:
        'A vitamin A derivative that accelerates cell turnover, reduces fine lines, and helps fade dark spots for a smoother, youthful complexion.',
      benefits: [
        'Reduces wrinkles and fine lines',
        'Improves skin texture and clarity',
        'Fades dark spots and hyperpigmentation',
      ],
      safety: 'Moderate risk',
    },
    {
      name: 'Vitamin C',
      category: 'Brightening',
      description:
        'A potent antioxidant that protects against free radicals, brightens dull skin, and boosts collagen for a firmer, radiant appearance.',
      benefits: [
        'Brightens and evens skin tone',
        'Boosts collagen and skin firmness',
        'Protects from environmental damage',
      ],
      safety: 'Low risk',
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

export default IngredientsTips; 