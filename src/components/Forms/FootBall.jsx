import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Grid, HStack, Text, useToast, VStack, Spinner } from '@chakra-ui/react';
import { addSportTicketThunk } from '../../store/ticketSlice';
import { getFootball } from '../../api';

function FootBall() {
  const userId = useSelector((state) => state.auth.user?.id);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const toast = useToast();

  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingStates, setLoadingStates] = useState({});

  useEffect(() => {
    (async () => {
      setMatches(await getFootball());
      setLoading(false);
    })();
  }, []);

  const sendData = async (ticketData, index) => {
    if (!isAuthenticated) {
      toast({ description: 'You need to Sign in to book a ticket.', status: 'error', duration: 3000, isClosable: true });
      return;
    }
    setLoadingStates((prevState) => ({ ...prevState, [index]: true }));
    try {
      await dispatch(addSportTicketThunk({ ...ticketData, sportType: "football", userId })).unwrap();
      toast({ description: 'Ticket booked successfully!', status: 'success', duration: 3000, isClosable: true });
    } catch (error) {
      toast({ description: error.message, status: 'error', duration: 3000, isClosable: true });
    } finally {
      setLoadingStates((prevState) => ({ ...prevState, [index]: false }));
    }
  };

  if (loading) return <Spinner />;

  return (
    <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
      {matches.map((ticket, index) => (
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
            <Text textAlign="center" width="100%" fontWeight="bolder" fontSize={{ base: "16px", md: "20px" }}>
              {ticket.teams}
            </Text>
          </HStack>
          <VStack align="start" mt={4} spacing={2}>
            <HStack><Text fontWeight="bold">Date:</Text><Text>{ticket.matchDate}</Text></HStack>
            <HStack><Text fontWeight="bold">Venue:</Text><Text>{ticket.venue}</Text></HStack>
            <HStack><Text fontWeight="bold">Price:</Text><Text>${ticket.price}</Text></HStack>
          </VStack>
          <Button isDisabled={loadingStates[index]} mt={4} colorScheme="teal" size={{ base: "sm", md: "md" }} onClick={() => sendData(ticket, index)}>
            {loadingStates[index] ? 'Booking...' : 'Book Now'}
          </Button>
        </Box>
      ))}
    </Grid>
  );
}

export default FootBall;
