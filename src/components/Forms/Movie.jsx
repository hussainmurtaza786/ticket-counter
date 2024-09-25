import React, { useState } from "react";
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
  const loader = useSelector((state) => state.ticket.fetchingState.loadTickets);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userId = useSelector((state) => state.auth.user?.id);
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
        userId: userId,
      };

      await dispatch(addMovieTicketThunk(data)).unwrap();
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

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)", 
          sm: "repeat(1, 1fr)",   
          md: "repeat(2, 1fr)",   
          lg: "repeat(2, 1fr)",  
          xl: "repeat(3, 1fr)",   
          "2xl": "repeat(4, 1fr)" 
        }}
        gap={6}
        maxW="100%"
        px={4} 
      >
        {movieData.map((movie, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            bg="gray.50"
            boxShadow="md"
            maxW="100%"
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
                maxH="200px"
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

            <Button
              isDisabled={loadingStates[index]}
              mt={4}
              colorScheme="teal"
              onClick={() => sendData(movie, index)}
            >
              {loadingStates[index] ? "Booking..." : "Book Now"}
            </Button>
          </Box>
        ))}
      </Grid>
    </div>
  );
}

export default Movie;
