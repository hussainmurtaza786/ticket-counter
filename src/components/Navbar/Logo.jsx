import { Box, Text, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <HStack spacing="10px" alignItems="center" userSelect="none">
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <Box
          mr={2}
          p="8px"
          borderRadius="lg"
          bgGradient="linear(to-r, teal.500, blue.500)"
          boxSize="40px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 2px 8px rgba(0, 128, 128, 0.3)"
        >
          <Text cursor='pointer' fontSize="20px" fontWeight="bold" color="white">
            TC
          </Text>
        </Box>
        <Text
          fontSize="20px"
          fontWeight="bold"
          color="gray.800"
          fontFamily="'Inter', sans-serif"
          letterSpacing="-0.5px"
        >
          TicketCounter
        </Text>
      </Link>
    </HStack>
  );
}

export default Logo;
