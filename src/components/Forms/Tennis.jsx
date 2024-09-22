import React from "react";
import { useDispatch, useSelector } from "react-redux";
import tennis from "../../json-data/tennis.json";
import {
  Box,
  Button,
  Grid,
  HStack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { addSportTicketThunk } from "../../store/ticketSlice";

function Tennis({ selectedSport }) {
  const userId = useSelector((state) => state.auth.user.id);
  const loader = useSelector((state) => state.ticket.fetchingState.loadTickets);
  const dispatch = useDispatch();
  const toast = useToast();

  const sendData = async (ticketData) => {

    try {
      const data = {
        ...ticketData,
        sportType: selectedSport,
        userId: userId,
      };

      await dispatch(addSportTicketThunk(data)).unwrap();
      toast({
        // title: "Success!",
        description: "Ticket booked successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error sending data:", error);
      alert(error.message);
    }
  };

  return (
    <div>
      {loader && <Text>Loading...</Text>}
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {tennis.map((ticket, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            bg="white"
            boxShadow="lg"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
          >
            <HStack bgColor="teal.500" color="white" p={2} borderRadius="md">
              <Text
                textAlign="center"
                width="100%"
                fontWeight="bolder"
                fontSize="20px"
              >
                {ticket.match}
              </Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Date:</Text>
              <Text>{ticket.date}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Venue:</Text>
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
      </Grid>
    </div>
  );
}

export default Tennis;
