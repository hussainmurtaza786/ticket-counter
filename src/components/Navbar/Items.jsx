import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";

function Items() {
  return (
    <div>
      <Box color={"whitesmoke"}>


        <Flex>
          <ListStyle>Home</ListStyle>
          <ListStyle>Ticket</ListStyle>
          <ListStyle>Contact</ListStyle>
          <ListStyle>About</ListStyle>
        </Flex>
      </Box>
    </div>
  );
}

export default Items;

const ListStyle = ({ children }) => {
  return (
    <Box
      m={4}
      fontSize='20px'
      p={2}
      zIndex={1000000}
      borderRadius="md"
      transition="transform 0.3s ease, color 0.3s ease"
      _hover={{
        transform: "scale(1.1)",
        color: "#386B99      ",
      }}
    >
      <Link
      color='#4682B4 '
        _hover={{
          color: "#386B99      ",
        }}
      >
        {children}
      </Link>
    </Box>
  );
};
