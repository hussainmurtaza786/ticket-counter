import { Box, Text } from "@chakra-ui/react";
import React from "react";

function WebText() {
  return (
    <div>
      <Box m='1rem 2rem' >
        <Text
          opacity={0.9}
          fontSize="40px"
          mt='7rem'
          color='lightcyan'
          textShadow="3px 3px 6px rgba(0, 0, 0, 0.7)"
          fontFamily="'Roboto', sans-serif"
        >
          Get Ticket Effortlessly  <br />
          in a secure way <br /> through our user-friendly
          platform.
        </Text>
      </Box>
    </div>
  );
}

export default WebText;
