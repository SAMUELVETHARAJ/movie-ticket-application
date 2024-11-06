import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'antd';
import { Row, Col } from 'react-bootstrap';

const MovieDetails = ({ addToCart }) => {
  const { _id } = useParams();  // Get movie ID from the URL
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the movie details from the API
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://backend-crud-one.vercel.app/product/${_id}`);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch movie details:', error);
        setError('Failed to fetch movie details');
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={16}>
        {/* Left Column: Movie Image */}
        <Col xs={24} sm={12} md={6} lg={6}>
          <img src={movie.image} alt={movie.name} style={{ width: '100%' }} />
        </Col>

        {/* Right Column: Movie Details */}
        <Col xs={24} sm={12} md={6} lg={6}>
          <h1>{movie.name}</h1>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Description:</strong> {movie.description}</p> {/* Include a description */}
          <p><strong>Release Date:</strong> {movie.releaseDate}</p> {/* Include release date if available */}
          <p><strong>Director:</strong> {movie.director}</p> {/* Include director info if available */}

          {/* Add to Cart Button */}
          <Button type="primary" onClick={() => addToCart(movie)}>Add to Cart</Button>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
