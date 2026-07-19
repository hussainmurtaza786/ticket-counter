import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Heading,
  Text,
  useToast,
  SimpleGrid,
  Stack,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addTransportTicketThunk } from "../../store/ticketSlice";
import { searchTransport } from "../../api";

const Transportation = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?.id);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const toast = useToast();
  const [destination, setDestination] = useState("");
  const [journey, setJourney] = useState("");
  const [availableTickets, setAvailableTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingStates, setLoadingStates] = useState({});

  const handleSearch = async () => {
    if (!isAuthenticated) {
      toast({ description: "You need to Sign in to book a ticket.", status: "error", duration: 3000, isClosable: true });
      return;
    }
    setLoading(true);
    const filtered = await searchTransport(destination, journey);
    setAvailableTickets(filtered);
    setLoading(false);

    if (filtered.length === 0) {
      toast({ title: "No Tickets Found", description: "No available tickets found for your selected route.", status: "error", duration: 3000, isClosable: true });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const bookTicketHandler = async (ticketData, index) => {
    if (!isAuthenticated) {
      toast({ description: "You need to Sign in to book a ticket.", status: "error", duration: 3000, isClosable: true });
      return;
    }
    setLoadingStates((prevState) => ({ ...prevState, [index]: true }));
    try {
      await dispatch(addTransportTicketThunk({ ...ticketData, userId })).unwrap();
      toast({ title: "Success!", description: "Ticket booked successfully!", status: "success", duration: 3000, isClosable: true });
    } catch (error) {
      toast({ title: "Error!", description: error.message, status: "error", duration: 3000, isClosable: true });
    } finally {
      setLoadingStates((prevState) => ({ ...prevState, [index]: false }));
    }
  };

  return (
    <Box p={{ base: 3, md: 5 }} shadow="md" borderWidth="1px" borderRadius="lg">
      <Heading mb={4} fontSize={{ base: "lg", md: "xl" }}>
        Flight & Travel Search
      </Heading>
      <Stack spacing={4}>
        <Input
          placeholder="From (e.g., New York)"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          onKeyDown={handleKeyDown}
          mb={3}
          width={{ base: "100%", md: "70%" }}
        />
        <Input
          placeholder="To (e.g., London)"
          value={journey}
          onChange={(e) => setJourney(e.target.value)}
          onKeyDown={handleKeyDown}
          mb={3}
          width={{ base: "100%", md: "70%" }}
        />
        <Button
          isDisabled={journey.length === 0 || destination.length === 0 || loading}
          colorScheme="teal"
          onClick={handleSearch}
          mb={4}
          size={{ base: "md", md: "lg" }}
          width={{ base: "100%", md: "auto" }}
        >
          {loading ? "Searching..." : "Search Tickets"}
        </Button>
      </Stack>

      {loading ? <Spinner /> : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
          {availableTickets.map((ticket, index) => (
            <VStack key={ticket.id} p={3} borderWidth="1px" borderRadius="md" align="stretch" spacing={2}>
              <Text fontSize={{ base: "sm", md: "md" }}>
                {ticket.type.toUpperCase()} from {ticket.from} to {ticket.to} at {ticket.departure_time}, Price: ${ticket.price}
              </Text>
              <Button
                colorScheme="blue"
                variant="outline"
                isLoading={loadingStates[index]}
                _hover={{ bg: "blue.500", color: "white" }}
                size={{ base: "md", md: "lg" }}
                onClick={() => bookTicketHandler(ticket, index)}
              >
                {loadingStates[index] ? "Booking..." : "Book Ticket"}
              </Button>
            </VStack>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Transportation;
