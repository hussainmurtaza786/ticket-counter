import React, { useState } from "react";
import {
  Button,
  Text,
  VStack,
  HStack,
  Box,
  Grid,
  useToast,
  Image,
} from "@chakra-ui/react";
import cricketData from "../../json-data/cricket.json";
import { useDispatch, useSelector } from "react-redux";
import { addSportTicketThunk } from "../../store/ticketSlice";

function Cricket({ selectedSport }) {
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
        description: "Ticket booked successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error sending data:", error);
      toast({
        description: error.message,
        status: "error",
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

      <Grid templateColumns="repeat(3, 1fr)" userSelect="none" gap={6}>
        {cricketData.map((ticket, index) => (
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
            <HStack>
              <Text
                textAlign="center"
                width="100%"
                fontWeight="bolder"
                fontSize="20px"
              >
                {ticket.teams} {ticket.match}
              </Text>
            </HStack>

            <HStack
              backgroundColor="teal.500"
              color="white"
              p={2}
              borderRadius="md"
              justifyContent="center"
            >
              <Text fontSize="18px">{ticket.cricketType}</Text>
            </HStack>

            <VStack align="start" mt={4} spacing={2}>
           
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
            </VStack>

            <Button
              isDisabled={loadingStates[index]}
              mt={4}
              colorScheme="teal"
              onClick={() => sendData(ticket, index)}
            >
              {loadingStates[index] ? "Booking..." : "Book Now"}
            </Button>
          </Box>
        ))}
      </Grid>
    </div>
  );
}

export default Cricket;
