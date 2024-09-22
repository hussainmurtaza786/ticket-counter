import React from "react";
import {
  Button,
  Text,
  VStack,
  HStack,
  Box,
  Grid,
  Link,
  Image,
  useToast,
} from "@chakra-ui/react";
import movieData from "../../json-data/movie.json";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTicketThunk } from "../../store/ticketSlice";

function Movie() {
  const userId = useSelector((state) => state.auth.user.id);
  const loader = useSelector((state) => state.ticket.fetchingState.loadTickets);
  const dispatch = useDispatch();
  const toast = useToast();
  const sendData = async (ticketData) => {
    try {
      const data = {
        ...ticketData,
        userId: userId,
      };

      await dispatch(addMovieTicketThunk(data)).unwrap();
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
        {movieData.map((movie, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            bg="gray.50"
            boxShadow="md"
          >
            <HStack>
              <Text
                textAlign="center"
                width="100%"
                fontWeight="bolder"
                fontSize="20px"
              >
                {movie.movie}
              </Text>
            </HStack>

            <VStack align="start" mt={4} spacing={2}>
              <Image
                w="100%"
                src={movie.image}
                alt={movie.movie}
                boxSize="100%"
                objectFit="cover"
                borderRadius="md"
              />
              <HStack>
                <Text fontWeight="bold">Rating:</Text>
                <Text>{movie.rating}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Price:</Text>
                <Text>${movie.price}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Web Link:</Text>
                <Link href={movie.imdb_url} color="teal.500" isExternal>
                  {movie.imdb_url}
                </Link>
              </HStack>
            </VStack>

            <Button mt={4} colorScheme="teal" onClick={() => sendData(movie)}>
              Book Now
            </Button>
          </Box>
        ))}
      </Grid>
    </div>
  );
}

export default Movie;
