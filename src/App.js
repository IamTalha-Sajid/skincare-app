import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import RoutineTracker from './pages/RoutineTracker';
import ProductTracker from './pages/ProductTracker';
import IngredientsTips from './pages/IngredientsTips';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Routines from './pages/Routines';
import RoutineDetail from './pages/RoutineDetail';
import CreateRoutine from './pages/CreateRoutine';
import About from './pages/About';

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
      <AuthProvider>
        <Router>
          <div className="App">
            <Navbar />
            <main style={{ padding: '20px', marginTop: '64px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/ingredients-tips" element={<IngredientsTips />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                
                {/* Protected Routes */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/routine-tracker"
                  element={
                    <ProtectedRoute>
                      <RoutineTracker />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/product-tracker"
                  element={
                    <ProtectedRoute>
                      <ProductTracker />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/routines"
                  element={
                    <ProtectedRoute>
                      <Routines />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/routines/:id"
                  element={
                    <ProtectedRoute>
                      <RoutineDetail />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/create-routine"
                  element={
                    <ProtectedRoute>
                      <CreateRoutine />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
