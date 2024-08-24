import React, { useEffect } from 'react';
import { Box, Text, VStack, HStack, Flex } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { moviesThunk } from '../store/movieSlice';


function FetchData() {
    const dispatch = useDispatch();
    const { data, isLoading } = useSelector(state => state.movie);

    useEffect(() => {
        dispatch(moviesThunk());
    }, [dispatch]);

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

   
    return (
        <Flex justifyContent='center' alignItems='center'>
            {data && data.map((movie, index) => (
                <Box
                    key={index}
                    width='400px'
                    m='16px 8px'
                    border='2px dashed black'
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    p={4}
                    bg="white"
                    shadow="md"
                >
                    <VStack align="start" spacing={3}>
                        <HStack>
                            <Text fontWeight="bold">Name:</Text>
                            <Text>{movie.firstName} {movie.lastName}</Text>
                        </HStack>
                        <HStack>
                            <Text fontWeight="bold">Movie:</Text>
                            <Text>{movie.movieName}</Text>
                        </HStack>
                        <HStack>
                            <Text fontWeight="bold">Email:</Text>
                            <Text>{movie.email}</Text>
                        </HStack>
                        <HStack>
                            <Text fontWeight="bold">Time:</Text>
                            <Text>{movie.time}</Text>
                        </HStack>
                        <HStack>
                            <Text fontWeight="bold">Date:</Text>
                            <Text>{movie.date}</Text>
                        </HStack>
                    </VStack>
                </Box>
            ))}
        </Flex>
    );
}

export default FetchData;
