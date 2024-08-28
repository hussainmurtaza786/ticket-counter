import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  FormControl,
  FormLabel,
  Input,
  VStack,
  CloseButton,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";

function Train() {
  return (
    <div>
      <form>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel> Name</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>

          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input type="number" />
          </FormControl>

          <FormControl>
            <FormLabel>Number of Passengers</FormLabel>
            <Input type="number" />
          </FormControl>

          <FormControl>
            <FormLabel>Departure Station</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl>
            <FormLabel>Destination Station</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl>
            <FormLabel>Departure Date</FormLabel>
            <Input type="date" />
          </FormControl>

          <FormControl>
            <FormLabel>Departure Time</FormLabel>
            <Input type="time" />
          </FormControl>

          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </VStack>
      </form>
    </div>
  );
}

export default Train;
