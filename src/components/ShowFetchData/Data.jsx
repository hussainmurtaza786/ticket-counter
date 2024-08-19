import { Box, Button, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../store/movie-action';
 

function Data() {
  const dispatch = useDispatch();
  // const movieData = useSelector((state) => state.movie.data);  
  const loading = useSelector((state) => state.movie.isLoading);  
  const error = useSelector((state) => state.movie.error);  

  useEffect(() => {
    dispatch(fetchMovie());
  }, [dispatch]);

  const state = useSelector(state => state);
  console.log('State==>', state);

  return (
    <Box display="flex" p='10px 8px' justifyContent="center" alignItems="center" backgroundColor="#f0f0f0">
      <Button onClick={() => dispatch(fetchMovie())}>Fetch Data</Button>
      <Box
        width="400px"
        padding="20px"
        border="2px dashed #333"
        borderRadius="8px"
        backgroundColor="white"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      >
        {loading && <Text>Loading...</Text>}
        {error && <Text color="red.500">{error}</Text>}
        {movieData && movieData.length > 0 && (
          <Box>
            <Text fontSize="2xl" fontWeight="bold" mb="4">Movie Ticket</Text>
            {movieData.map((movie, index) => (
              <Box key={index}>
                <Text><strong>Movie Name:</strong> {movie.movieName}</Text>
                <Text><strong>First Name:</strong> {movie.firstName}</Text>
                <Text><strong>Last Name:</strong> {movie.lastName}</Text>
                <Text><strong>Email:</strong> {movie.email}</Text>
                <Text><strong>Date:</strong> {movie.date}</Text>
                <Text><strong>Time:</strong> {movie.time}</Text>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Data;
