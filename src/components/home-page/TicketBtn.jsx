import { Button } from '@chakra-ui/react';
import React from 'react';
function TicketButton({ isShowing, toggle }) {
  return (
    <Button
      width={{ base: "150px", md: "180px" }}
      height={{ base: "50px", md: "60px" }}
      bg="blue.500"
      color="white"
      fontSize="lg"
      fontWeight="bold"
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
      onClick={toggle}
    >
      {isShowing ? 'Hide Tickets' : 'Show Tickets'}
    </Button>
  );
}

export default TicketButton;
