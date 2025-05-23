import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import RoutineTracker from './pages/RoutineTracker';
import ProductTracker from './pages/ProductTracker';
import IngredientsTips from './pages/IngredientsTips';
import Profile from './pages/Profile';
import About from './pages/About';
import Login from './pages/Login';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0', // Purple shade
    },
    secondary: {
      main: '#f50057', // Pink shade
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <main style={{ padding: '20px', marginTop: '64px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/routine-tracker" element={<RoutineTracker />} />
              <Route path="/product-tracker" element={<ProductTracker />} />
              <Route path="/ingredients-tips" element={<IngredientsTips />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
