import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import footballData from '../../json-data/football.json'
import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import { addSportTicketThunk } from '../../store/ticketSlice';



function FootBall({ selectedSport, onClose }) {
  const userId = useSelector((state) => state.auth.user.id);
  const loader = useSelector((state) => state.ticket.fetchingState.loadTickets);
  const dispatch = useDispatch();

  const sendData = async (ticketData) => {
    try {
      const data = {
        ...ticketData,
        sportType: selectedSport,
        userId: userId,
      };

      await dispatch(addSportTicketThunk(data)).unwrap();
      console.log('Football data ==>', data)

      onClose();
    } catch (error) {
      console.error('Error sending data:', error);
      alert(error.message);
    }
  };
  return (
    <div>
      {loader && <Text>Loading...</Text>}

      <VStack spacing={6} align="stretch">
        {footballData.map((ticket, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" p={4} bg="gray.50">

            <HStack>
              <Text textAlign='center' width='100%' fontWeight='bolder' fontSize='20px' >{ticket.teams}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Date:</Text>
              <Text>{ticket.matchDate}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Stadium:</Text>
              <Text>{ticket.venue}</Text>
            </HStack>
           
            <HStack>
              <Text fontWeight="bold">Price:</Text>
              <Text>${ticket.price}</Text>
            </HStack>
            <Button mt={4} colorScheme="teal" onClick={() => sendData(ticket)}>
              Book Now
            </Button>
          </Box>
        ))}
      </VStack>
    </div>
  )
}

export default FootBall
