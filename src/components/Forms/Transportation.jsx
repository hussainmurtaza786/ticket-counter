import React, { useState } from "react";
import ticketsData from "../../json-data/flight.json";
import {
  Box,
  Button,
  Input,
  Heading,
  List,
  ListItem,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addTransportTicketThunk } from "../../store/ticketSlice";

const TicketSearch = () => {
  const dispatch =useDispatch()
  const userId = useSelector((state) => state.auth.user.id);
  const toast = useToast();
  const [destination, setDestination] = useState("");
  const [journey, setJourney] = useState("");
  const [availableTickets, setAvailableTickets] = useState([]);

  const handleSearch = () => {
    const filteredTickets = ticketsData.tickets.filter((ticket) => {
      return (
        ticket.from.toLowerCase() === destination.toLowerCase() &&
        ticket.to.toLowerCase() === journey.toLowerCase() &&
        ticket.available
      );
    });

    setAvailableTickets(filteredTickets);

    if (filteredTickets.length === 0) {
      toast({
        title: "No Tickets Found",
        description: "No available tickets found for your selected route.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const bookTicketHandler = async (ticketData) => {
    try {
      const data = {
        ...ticketData,
        userId: userId,
      };

      await dispatch(addTransportTicketThunk(data)).unwrap();
      console.log(data);
      toast({
        title: "Success!",
        description: "Ticket booked successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error sending data:", error);
      toast({
        title: "Error!",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
      <Heading mb={4}>Flight Ticket Search</Heading>
      <Input
        placeholder="Enter your Journey from (e.g., Karachi)"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        mb={3}
      />
      <Input
        placeholder="Enter your destination to (e.g., Lahore)"
        value={journey}
        onChange={(e) => setJourney(e.target.value)}
        mb={3}
      />
      <Button
        isDisabled={journey.length === 0 || destination.length === 0}
        colorScheme="teal"
        onClick={handleSearch}
        mb={4}
      >
        Search Tickets
      </Button>
      <List spacing={3}>
        {availableTickets.map((ticket) => (
          <ListItem key={ticket.id} p={3} borderWidth="1px" borderRadius="md">
            {ticket.type.toUpperCase()} from {ticket.from} to {ticket.to} at{" "}
            {ticket.departure_time}, Price: {ticket.price} PKR
            <Button
              colorScheme="blue"
              variant="outline"
              ml={4}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={() => bookTicketHandler(ticket)}
            >
              Book Ticket
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TicketSearch;
