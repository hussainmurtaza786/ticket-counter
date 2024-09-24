import { Box, Image, Text, VStack, HStack, Grid, useColorModeValue } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const BookTicket = () => {
  const movies = useSelector((state) => state.ticket.movies);
  const sports = useSelector((state) => state.ticket.sports);
  const transports = useSelector((state) => state.ticket.transports);

  const cardBg = useColorModeValue("white", "gray.800"); // Light/Dark mode support
  const borderColor = useColorModeValue("gray.300", "gray.700");
  const hoverColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box p={4}>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={6}
      >
        {/* /////////// Movie Tickets ////////// */}
        {movies.map((item) => (
          <HStack
            key={item.id}
            m={4}
            p={4}
            bg={cardBg}
            border={`1px solid ${borderColor}`}
            borderRadius="lg"
            boxShadow="md"
            _hover={{ boxShadow: "xl", bg: hoverColor, transform: "scale(1.02)" }}
            transition="all 0.2s"
          >
            <Image
              boxSize="150px"
              objectFit="cover"
              src={item.image}
              alt="Movie Poster"
              borderRadius="md"
            />
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold" fontSize="xl">
                {item.movie}
              </Text>
              <Text>Price: <strong>${item.price}</strong></Text>
              <Text>Rating: <strong>{item.rating}</strong></Text>
            </VStack>
          </HStack>
        ))}

        {/* /////////// Sports Tickets ////////// */}
        {sports.map((item) => (
          <HStack
            key={item.id}
            m={4}
            p={4}
            bg={cardBg}
            border={`1px solid ${borderColor}`}
            borderRadius="lg"
            boxShadow="md"
            _hover={{ boxShadow: "xl", bg: hoverColor, transform: "scale(1.02)" }}
            transition="all 0.2s"
          >
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold" fontSize="xl">
                {item.teams} {item.match}
              </Text>
              <Text>Venue: <strong>{item.venue}</strong></Text>
              <Text>Match Date: <strong>{item.matchDate}</strong></Text>
              <Text>Price: <strong>${item.price}</strong></Text>
            </VStack>
          </HStack>
        ))}

        {/* /////////// Transport Tickets ////////// */}
        {transports.map((item) => (
          <HStack
            key={item.id}
            m={4}
            p={4}
            bg={cardBg}
            border={`1px solid ${borderColor}`}
            borderRadius="lg"
            boxShadow="md"
            _hover={{ boxShadow: "xl", bg: hoverColor, transform: "scale(1.02)" }}
            transition="all 0.2s"
          >
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold" fontSize="xl">
                 {item.from} To {item.to}
              </Text>
              <Text>Transport Type: <strong>{item.type.toUpperCase()}</strong></Text>
              <Text>Departure Time: <strong>{item.departure_time}</strong></Text>
              <Text>Arrival Time: <strong>{item.arrival_time}</strong></Text>
              <Text>Price: <strong>${item.price}</strong></Text>
            </VStack>
          </HStack>
        ))}
      </Grid>
    </Box>
  );
};

export default BookTicket;
