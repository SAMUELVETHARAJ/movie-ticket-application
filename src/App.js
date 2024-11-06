import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Log from './components/Log';
import HomePage from './pages/HomePage';
import MovieDetails from './components/MovieDetails';
import Cart from './components/Cart';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import GoogleLoginComponent from './components/GoogleLoginComponent';
// import DetailPage from './pages/DetailPage';
// import Login from './components/Login';

const App = () => {
  const [cart, setCart] = useState([]);
  console.log(cart, "check cart")
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addToCart = (movie) => {
    const exists = cart.find((item) => item._id === movie._id);
    if (exists) {
      alert('Movie already in cart!');
    } else {
      setCart([...cart, { ...movie, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Routes>
        {/* <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} /> */}
        
        <Route
          path="/"
          element={ <Log /> }
      
        
      
        />
        <Route
          path="/home"
          element={ <HomePage addToCart={addToCart} /> }
        />
        <Route
          path="/product/:_id"
          element={ <MovieDetails addToCart={addToCart} /> }
        />
        <Route
          path="/cart"
          element={ <Cart cart={cart} setCart={setCart} />}
        />
        {/* <Route path="/movie/:id" element={<DetailPage addToCart={addToCart} />} /> Route for DetailPage */}

        
      </Routes>
      </GoogleOAuthProvider>
    </Router>
  );
};

export default App;
