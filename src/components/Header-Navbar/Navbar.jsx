import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  position,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "./HeadLogo";
import WebImage from "./Image";
import Items from "./Items";
import WebText from "./Text";
import TicketList from "./TicketList";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const showButton = () => {
    setIsVisible(true);
  };
  return (
    <Box height="70vh" width="100%" position="relative">
    <Box
      bgColor="#3498db"
      height="100%"
      opacity={0.2}
      width="100%"
      position="absolute"
      top={0}
    >
        <Logo />
      </Box>
      <Items />
      <WebImage />
      <WebText />

      <Box position="absolute" left="3rem" top="20rem">
        <Button
          onClick={showButton}
          bg="blue.500"
          color="white"
          fontSize="lg"
          fontWeight="bold"
          width='150px'
          height='50px'
          px={6}
          py={4}
          borderRadius="md"
          boxShadow="lg"
          _hover={{
            bg: "blue.600",
            transform: "scale(1.05)",
          }}
          _active={{
            bg: "blue.700",
            transform: "scale(0.95)",
          }}
          _focus={{
            boxShadow: "outline",
          }}
        >
          Tickets
        </Button>
      </Box>
      {isVisible && <TicketList />}
    </Box>
  );
}

export default Navbar;
