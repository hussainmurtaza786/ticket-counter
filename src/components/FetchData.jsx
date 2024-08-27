import React from 'react';
import { Box, Text, VStack, HStack, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function FetchData() {
    const data = useSelector(state => state.ticket.movies);

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    };

    return (
        <Flex justifyContent='center' alignItems='center'>
            {data && data.map((movie, index) => (
                <Box
                    key={movie.id}
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
                            <Text fontWeight="bold">Movie Name:</Text>
                            <Text>{movie.name}</Text>
                        </HStack>
                        <HStack>
                            <Text fontWeight="bold">Movie Genre:</Text>
                            <Text>{movie.genre}</Text>
                        </HStack>
                        <HStack>
                            <Text fontWeight="bold">Price:</Text>
                            <Text>{movie.price}</Text>
                        </HStack>
                        <HStack>
                            <Text fontWeight="bold">Date-Time:</Text>
                            <Text>{formatDate(movie.timestamp)}</Text>
                        </HStack>
                        <HStack>
                            <Text fontWeight="bold">Seat:</Text>
                            <Text>{movie.seat}</Text>
                        </HStack>
                    </VStack>
                </Box>
            ))}
        </Flex>
    );
}

export default FetchData;
