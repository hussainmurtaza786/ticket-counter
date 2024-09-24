import React, { useState } from "react";
import ticketsData from "../../json-data/flight.json";
import { Box, Button, Input, Heading, List, ListItem, Text, useToast, SimpleGrid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addTransportTicketThunk } from "../../store/ticketSlice";

const Transportation = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?.id);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const toast = useToast();
  const [destination, setDestination] = useState("");
  const [journey, setJourney] = useState("");
  const [availableTickets, setAvailableTickets] = useState([]);
  const [loadingStates, setLoadingStates] = useState({});

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

  const bookTicketHandler = async (ticketData, index) => {
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
        userId: userId,
      };

      await dispatch(addTransportTicketThunk(data)).unwrap();
      toast({
        title: "Success!",
        description: "Ticket booked successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error!",
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
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
      <Heading mb={4}>Flight Ticket Search</Heading>
      <Input
        placeholder="Enter your Journey from (e.g., Karachi)"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        mb={3}
        width={{ base: "100%", md: "70%" }} // Responsive width
      />
      <Input
        placeholder="Enter your destination to (e.g., Lahore)"
        value={journey}
        onChange={(e) => setJourney(e.target.value)}
        mb={3}
        width={{ base: "100%", md: "70%" }} // Responsive width
      />
      <Button
        isDisabled={journey.length === 0 || destination.length === 0}
        colorScheme="teal"
        onClick={handleSearch}
        mb={4}
        size={{ base: "md", md: "lg" }} // Responsive button size
      >
        Search Tickets
      </Button>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}> {/* Responsive grid layout for tickets */}
        {availableTickets.map((ticket, index) => (
          <ListItem key={ticket.id} p={3} borderWidth="1px" borderRadius="md" display="flex" justifyContent="space-between" alignItems="center">
            <Text>
              {ticket.type.toUpperCase()} from {ticket.from} to {ticket.to} at {ticket.departure_time}, Price: {ticket.price} PKR
            </Text>
            <Button
              colorScheme="blue"
              variant="outline"
              isLoading={loadingStates[index]}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={() => bookTicketHandler(ticket, index)}
            >
              {loadingStates[index] ? "Booking..." : "Book Ticket"}
            </Button>
          </ListItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Transportation;
