import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import football from '../../json-data/football.json';
import { Box, Button, Grid, HStack, Text, useToast, VStack } from '@chakra-ui/react';
import { addSportTicketThunk } from '../../store/ticketSlice';

function FootBall({ selectedSport }) {
  const userId = useSelector((state) => state.auth.user?.id);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loader = useSelector((state) => state.ticket.fetchingState.loadTickets);
  const dispatch = useDispatch();
  const toast = useToast();
  const [loadingStates, setLoadingStates] = useState({});

  const sendData = async (ticketData, index) => {
    if (!isAuthenticated) {
      toast({
        description: 'You need to Sign in to book a ticket.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoadingStates((prevState) => ({
      ...prevState,
      [index]: true,
    }));

    try {
      const data = {
        ...ticketData,
        sportType: selectedSport,
        userId: userId,
      };

      await dispatch(addSportTicketThunk(data)).unwrap();
      toast({
        description: 'Ticket booked successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error sending data:', error);
      toast({
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoadingStates((prevState) => ({
        ...prevState,
        [index]: false,
      }));
    }
  };

  return (
    <div>
      {loader && <Text>Loading...</Text>}
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {football.map((ticket, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            bg="white"
            boxShadow="lg"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
          >
            
            <HStack bgColor="teal.500" color="white" p={2} borderRadius="md">
              <Text textAlign="center" width="100%" fontWeight="bolder" fontSize="20px">
                {ticket.teams}
              </Text>
            </HStack>
            <VStack align="start" mt={4} spacing={2}>
              <HStack>
                <Text fontWeight="bold">Date:</Text>
                <Text>{ticket.matchDate}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Venue:</Text>
                <Text>{ticket.venue}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Price:</Text>
                <Text>${ticket.price}</Text>
              </HStack>
            </VStack>
            <Button
              isDisabled={loadingStates[index]}
              mt={4}
              colorScheme="teal"
              onClick={() => sendData(ticket, index)} 
            >
              {loadingStates[index] ? 'Booking...' : 'Book Now'}
            </Button>
          </Box>
        ))}
      </Grid>
    </div>
  );
}

export default FootBall;
