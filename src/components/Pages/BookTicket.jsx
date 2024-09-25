import { Box, Image, Text, VStack, HStack, Grid, useColorModeValue, Select } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";

const BookTicket = () => {
  const movies = useSelector((state) => state.ticket.movies);
  const sports = useSelector((state) => state.ticket.sports);
  const transports = useSelector((state) => state.ticket.transports);

  const cardBg = useColorModeValue("white", "gray.800"); // Light/Dark mode support
  const borderColor = useColorModeValue("gray.300", "gray.700");
  const hoverColor = useColorModeValue("gray.100", "gray.700");
  const values = ["movie", "sports", "flight"];
  const [selectedTicket, setSelectedTicket] = useState("movie");

  const handleTicketChange = (e) => {
    setSelectedTicket(e.target.value);
  };

  return (
    <Box p={4}>
      <Box justifyContent="center" m="2px">
        <Select
          value={selectedTicket}
          onChange={handleTicketChange}
          m={4}
          width={{ base: "100px", sm: "200px", md: "300px" }}
          fontSize={{ base: "16px", md: "18px" }}
        >
          {values.map((val) => (
            <option key={val} value={val}>
              {val.toUpperCase()}
            </option>
          ))}
        </Select>
      </Box>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={6}
      >
        {/* /////////// Movie Tickets ////////// */}
        {selectedTicket === "movie" &&
          movies.map((item) => (
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
          ))
        }

        {/* /////////// Sports Tickets ////////// */}
        {selectedTicket === 'sports' &&
          sports.map((item) => (
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
          ))
        }
        {/* /////////// Transport Tickets ////////// */}
        {selectedTicket === 'flight' &&

          transports.map((item) => (
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
              <VStack display="flex" align="start" spacing={3} w="100%">
                <Box display="flex" justifyContent="space-between" w="100%">
                  <HStack spacing={2} align="center">
                    <Text fontWeight="bold" fontSize="xl">
                      {item.from} To {item.to}
                    </Text>
                    <Image
                      src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_map_location_logo_icon_159350.png"
                      alt="location icon"
                      w="40px"
                    />
                  </HStack>
                </Box>
                <Text>Transport Type: <strong>{item.type.toUpperCase()}</strong></Text>
                <Text>Departure Time: <strong>{item.departure_time}</strong></Text>
                <Text>Arrival Time: <strong>{item.arrival_time}</strong></Text>
                <Text>Price: <strong>${item.price}</strong></Text>
              </VStack>
            </HStack>
          ))

        }
      </Grid>
    </Box >
  );
};

export default BookTicket;
