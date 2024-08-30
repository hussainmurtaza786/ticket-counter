import React from 'react';
import { Box, Text, VStack, HStack, Flex, Image, Badge, Grid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function FetchData() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const movieData = useSelector(state => state.ticket.movies);
    const transportData = useSelector(state => state.ticket.transports);
    const sportData = useSelector(state => state.ticket.sports)
    console.log('isAuthenticated', isAuthenticated)
    if (!isAuthenticated) {
        return (
            <Text color='black' fontSize='40px' >
                Please Sign In
            </Text>
        )
    }

    console.log("Sport data ==>", sportData)

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    };

    return (
        <>

            {/* {!isAuthenticated && <Box> PLease Sign In to show your ticket</Box>} */}
            {/* Movie Data */}
            <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                {movieData && movieData.map((movie) => (
                    <Box key={movie.id} width='400px' m='16px 8px' border='2px dashed black' borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} bg="white" shadow="md">
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
            </Grid>


            {/* Transport Data */}
            <Grid templateColumns='repeat(3, 1fr)' gap={4}>

                {transportData && transportData.map((transport) => (
                    <Box key={transport.id} width='400px' m='16px 8px' border='2px dashed black' borderWidth="1px" borderRadius="lg" overflow="hidden" position="relative" bg="white" shadow="md">
                        <Image src={transport.transportType === 'plane' ? 'https://png.pngtree.com/thumb_back/fh260/background/20230805/pngtree-the-flight-path-on-both-sides-of-the-runway-image_12972430.jpg' :
                            transport.transportType === 'bus' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT95AAuIODV91eecjsNyt7u86vRH7ohjyGtGQ&s' :
                                'https://c1.wallpaperflare.com/preview/10/22/374/airplane-plane-track-railway.jpg'}
                            alt={transport.transportType} objectFit="cover" width="100%" height="100%" position="absolute" top="0" left="0" zIndex="0" />

                        <VStack align="start" height='100%' spacing={3} position="relative" top="0" left="0" right="0" bottom="0" p={4} zIndex="1" color="white" bg="rgba(0, 0, 0, 0.5)">
                            <HStack>
                                <Text fontWeight="bold">Transport:</Text>
                                <Badge fontSize='13px' variant='outline' colorScheme='green'>
                                    {transport.transportType}
                                </Badge>
                            </HStack>
                            <HStack>
                                <Text fontWeight="bold">Name:</Text>
                                <Text>{transport.name}</Text>
                            </HStack>
                            <HStack>
                                <Text fontWeight="bold">Email:</Text>
                                <Text>{transport.email}</Text>
                            </HStack>
                            <HStack>
                                <Text fontWeight="bold">Passengers:</Text>
                                <Text>{transport.passengers}</Text>
                            </HStack>

                            {transport.transportType === 'plane' && (
                                <>
                                    <HStack>
                                        <Text fontWeight="bold">Departure Airport:</Text>
                                        <Text>{transport.depAirport}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontWeight="bold">Destination Airport:</Text>
                                        <Text>{transport.desAirport}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontWeight="bold">Departure Date:</Text>
                                        <Text>{transport.depDate}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontWeight="bold">Departure Time:</Text>
                                        <Text>{transport.depTime}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontWeight="bold">Return Date:</Text>
                                        <Text>{transport.returnDate}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontWeight="bold">Return Time:</Text>
                                        <Text>{transport.returnTime}</Text>
                                    </HStack>
                                </>
                            )}
                            {transport.transportType === 'bus' && (
                                <>
                                    <HStack>
                                        <Text fontWeight="bold">Departure Location:</Text>
                                        <Text>{transport.depLocation}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontWeight="bold">Destination Location:</Text>
                                        <Text>{transport.desLocation}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontWeight="bold">Departure Date:</Text>
                                        <Text>{transport.depDate}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontWeight="bold">Departure Time:</Text>
                                        <Text>{transport.depTime}</Text>
                                    </HStack>
                                </>
                            )}
                            {transport.transportType === 'train' && (
                                <>
                                    <HStack>
                                        <Text fontWeight="bold">Departure Station:</Text>
                                        <Text>{transport.depStation}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontWeight="bold">Destination Station:</Text>
                                        <Text>{transport.desStation}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontWeight="bold">Departure Date:</Text>
                                        <Text>{transport.depDate}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontWeight="bold">Departure Time:</Text>
                                        <Text>{transport.depTime}</Text>
                                    </HStack>
                                </>
                            )}
                        </VStack>
                    </Box>
                ))}
            </Grid>


            {/* /////// Sport ///////////// */}

            <Grid templateColumns='repeat(3, 1fr)' gap={4}>

                {sportData && sportData.map((sport) => (
                    <Box key={sport.id} width='400px' m='16px 8px' border='2px dashed black' borderWidth="1px" borderRadius="lg" overflow="hidden" position="relative" bg="white" shadow="md">
                        <Image src={sport.sportType === 'cricket' ? 'https://png.pngtree.com/thumb_back/fh260/background/20230714/pngtree-d-illustration-of-a-cricket-stadium-with-a-front-view-and-image_3857836.jpg' :
                            sport.sportType === 'football' ? 'https://img.freepik.com/free-vector/gradient-football-field-background_23-2149000103.jpg' :
                                'https://t3.ftcdn.net/jpg/02/86/26/28/360_F_286262835_HZL6nc8KDiZlYawKW0gInGK7yZMu4EUC.jpg'}
                            alt={sport.sportType} objectFit="cover" width="100%" height="100%" position="absolute" top="0" left="0" zIndex="0" />

                        <VStack align="start" spacing={3} position="relative" top="0" left="0" right="0" bottom="0" p={4} zIndex="1" color="white" height='100%' bg="rgba(0, 0, 0, 0.5)">
                            <HStack>
                                <Text fontWeight="bold">Sport:</Text>
                                <Badge fontSize='13px' variant='outline' colorScheme='green'>
                                    {sport.sportType}
                                </Badge>
                            </HStack>
                            <HStack>
                                <Text fontWeight="bold">Date:</Text>
                                <Text>{sport.date}</Text>
                            </HStack>
                            <HStack>
                                <Text fontWeight="bold">Number of Ticket:</Text>
                                <Text>{sport.ticket}</Text>
                            </HStack>

                            {sport.sportType === 'cricket' && (
                                <>
                                    <HStack>
                                        <Text fontWeight="bold">Stadium :</Text>
                                        <Text>{sport.stadium}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontWeight="bold">Team :</Text>
                                        <Text>{sport.team}</Text>
                                    </HStack>

                                </>
                            )}
                            {sport.sportType === 'football' && (
                                <>
                                    <HStack>
                                        <Text fontWeight="bold">Stadium :</Text>
                                        <Text>{sport.stadium}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontWeight="bold">Home Team :</Text>
                                        <Text>{sport.homeTeam}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontWeight="bold">Away Team :</Text>
                                        <Text>{sport.awayTeam}</Text>
                                    </HStack>
                                </>
                            )}
                            {sport.sportType === 'tennis' && (
                                <>
                                    <HStack>
                                        <Text fontWeight="bold">Court Name :</Text>
                                        <Text>{sport.court}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontWeight="bold">Player 1 :</Text>
                                        <Text>{sport.player1}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text fontWeight="bold">Player 2 :</Text>
                                        <Text>{sport.player2}</Text>
                                    </HStack>
                                </>
                            )}
                        </VStack>
                    </Box>
                ))}
            </Grid>
        </>
    );
}

export default FetchData;
