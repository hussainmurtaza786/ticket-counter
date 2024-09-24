import { Box, Text } from "@chakra-ui/react";
import React from "react";

function WebText() {
  return (
    <Box width={{ base: "90%", md: "100%" }} m="1rem auto" userSelect="none">
      <Text
        fontSize={{ base: "24px", md: "40px" }}
        mt={{ base: "3rem", md: "7rem" }}
        color="lightcyan"
        textShadow="3px 3px 6px rgba(0, 0, 0, 0.7)"
        fontFamily="'Roboto', sans-serif"
        textAlign="center"
      >
        "Experience the fastest way to book tickets for movies, sports, and flights. Just a few clicks and you're all set!"
      </Text>
    </Box>
  );
}

export default WebText;
