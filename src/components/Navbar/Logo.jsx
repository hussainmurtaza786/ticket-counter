import { Box, Text, HStack } from "@chakra-ui/react";
import React from "react";

function Logo() {
  return (
    <HStack m="20px" spacing="10px" alignItems="center" userSelect="none">
      <Box
        p="10px"
        borderRadius="full"
        bgGradient="linear(to-r, #6A5ACD, #00BFFF)"
        boxSize="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="0 4px 10px rgba(0, 0, 0, 0.3)"
        cursor="default"
      >
        <Text fontSize="24px" fontWeight="bold" color="white">
          T
        </Text>
      </Box>

      <Text
        fontSize="24px"
        fontWeight="bold"
        color="black"
        fontFamily="'Raleway', sans-serif"
        textTransform="uppercase"
        letterSpacing="2px"
      >
        Ticket Counter
      </Text>
    </HStack>
  );
}

export default Logo;
