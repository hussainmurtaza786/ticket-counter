import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import tennis from "../../json-data/tennis.json";
import { Box, Button, Grid, HStack, Text, useToast, VStack } from "@chakra-ui/react";
import { addSportTicketThunk } from "../../store/ticketSlice";

function Tennis({ selectedSport }) {
  const userId = useSelector((state) => state.auth.user?.id);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loader = useSelector((state) => state.ticket.fetchingState.loadTickets);
  const dispatch = useDispatch();
  const toast = useToast();
  const [loadingStates, setLoadingStates] = useState({});

  const sendData = async (ticketData, index) => {
    if (!isAuthenticated) {
      toast({
        description: "You need to Sign in to book a ticket.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoadingStates((prevState) => ({ ...prevState, [index]: true }));
    try {
      const data = {
        ...ticketData,
        sportType: selectedSport,
        userId: userId,
      };

      await dispatch(addSportTicketThunk(data)).unwrap();
      toast({
        description: "Ticket booked successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoadingStates((prevState) => ({ ...prevState, [index]: false }));
    }
  };

  return (
    <div>
      {loader && <Text>Loading...</Text>}
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} // Responsive grid
        gap={6}
      >
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
              <Text textAlign="center" width="100%" fontWeight="bolder" fontSize={{ base: "18px", md: "20px" }}>
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
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={loadingStates[index]}
              onClick={() => sendData(ticket, index)}
              size={{ base: "md", sm: "lg" }} // Responsive button size
            >
              {loadingStates[index] ? "Booking..." : "Book Now"}
            </Button>
          </Box>
        ))}
      </Grid>
    </div>
  );
}

export default Tennis;
