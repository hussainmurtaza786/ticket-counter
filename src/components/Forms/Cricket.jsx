import React from "react";
import {
  Button,
  Text,
  VStack,
  HStack,
  Box,
  Grid,
  useToast,
} from "@chakra-ui/react";
import cricketData from "../../json-data/cricket.json";
import { useDispatch, useSelector } from "react-redux";
import { addSportTicketThunk } from "../../store/ticketSlice";

function Cricket({ selectedSport }) {
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
      // console.log(data);
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
                {ticket.teams}
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

            <Button mt={4} colorScheme="teal" onClick={() => sendData(ticket)}>
              Book Now
            </Button>
          </Box>
        ))}
      </Grid>
    </div>
  );
}

export default Cricket;
