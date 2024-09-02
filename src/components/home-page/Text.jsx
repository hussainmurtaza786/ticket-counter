import { Box, Text } from "@chakra-ui/react";
import React from "react";

function WebText() {
  return (
    <div>
      <Box width='600px' m='1rem 2rem' userSelect='none' >
        <Text
          fontSize="40px"
          mt='7rem'
          color='lightcyan'
          textShadow="3px 3px 6px rgba(0, 0, 0, 0.7)"
          fontFamily="'Roboto', sans-serif"
        >
      "Experience the fastest way to book tickets for movies, sports, and Flight. Just a few clicks and you're all set!"

        </Text>
      </Box>
    </div>
  );
}

export default WebText;
