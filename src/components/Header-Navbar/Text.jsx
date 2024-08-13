import { Box, Text } from "@chakra-ui/react";
import React from "react";

function WebText() {
  return (
    <div>
      <Box p={10} width={"100%"} position={"absolute"} top="4rem" left="0">
        <Text
          opacity={0.9}
          fontSize="40px"
          position={"absolute"}
          top="4rem"
          left="2rem"
          color='lightcyan'
        //   color={"#e02e0b"}
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
