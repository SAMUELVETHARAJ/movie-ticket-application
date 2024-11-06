// import React, { useEffect, useState } from 'react';
// import { Card, Row, Col } from 'antd';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const { Meta } = Card;

// const HomePage = ({ addToCart }) => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch movies from the API when the component mounts
//   useEffect(() => {
//     axios.get('https://backend-crud-one.vercel.app/product')  // Replace with your actual API
//       .then((response) => {
//         setMovies(response.data);  // Save movie data in state
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError('Failed to fetch movies');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <Row gutter={16}>
//       {movies.map((movie) => (
//         <Col span={6} key={movie.id}>
//           <Card
//             hoverable
//             cover={<img alt={movie.name} src={movie.image} />}
//             onClick={() => addToCart(movie)}
//           >
//             <Link to={`/movie/${movie.id}`}>
//               <Meta title={movie.name} description={movie.genre} />
//             </Link>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// };

// export default HomePage;


import React, { useEffect, useState } from 'react';
import { Row, Col} from 'antd'; // Import Input component for search bar
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';
import { Container } from 'react-bootstrap';



const HomePage = ({ addToCart }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  

  // Fetch movies from the API when the component mounts
  useEffect(() => {
    axios.get(`https://backend-crud-one.vercel.app/product`)
 // Replace with your actual API
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch movies');
        setLoading(false);
      });
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());  // Convert input to lowercase to handle case-insensitive search
  };

  // Filter movies based on the search term
  const filteredMovies = movies.filter((movie) => 
    movie.name.toLowerCase().includes(searchTerm) // Filter movie names
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div >
      {/* Search Bar */}
      <Navbar handleSearch={handleSearch}/>
      <Container>
      <Row gutter={16}>
        {filteredMovies.map((movie) => (
          <Col xs={24} sm={12} md={8} lg={6} key={movie.id}>
            {/* Use the MovieCard component for each movie */}
            <MovieCard movie={movie} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
      </Container>
      
    </div>
  
  );
};

export default HomePage;
