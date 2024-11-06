import React from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';


const { Meta } = Card;

const MovieCard = ({ movie, addToCart }) => {
  return (
    <Card
      hoverable
      cover={<img alt={movie.name} src={movie.image} />}
      style={{ marginBottom: '20px' }}
    >
      <Meta title={movie.name} description={movie.genre} />
      <div style={{ marginTop: '10px' }}>
        {/* Link to movie details page */}
        <Link to={`/product/${movie._id}`}>
          <Button type="primary" style={{ marginRight: '10px', marginBottom: '7px' }}>View Details</Button>
        </Link>
        {/* Add to cart button */}
        <Button onClick={() => addToCart(movie)}>Add to Cart</Button>
      </div>
    </Card>
  );
};

export default MovieCard;
