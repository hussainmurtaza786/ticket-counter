import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function Items() {
  return (
    <div>
      <Box color={"whitesmoke"}>


        <Flex>
          <ListStyle path='/' >Home</ListStyle>
          <ListStyle path='/ticket' >Ticket</ListStyle>
          <ListStyle path='/contact'>Contact</ListStyle>
          <ListStyle path='/about'>About</ListStyle>
          <ListStyle path='/review'>Review</ListStyle>
        </Flex>
      </Box>
    </div>
  );
}

export default Items;

const ListStyle = ({ children, path }) => {
  return (
    <Box
      m={4}
      fontSize='20px'
      color='black'
      p={2}
      zIndex={1000000}
      borderRadius="md"
      transition="transform 0.3s ease, color 0.3s ease"
      _hover={{
        transform: "scale(1.1)",
        color: "#386B99",
      }}
    >
      <NavLink
        to={path}
        color='#4682B4 '
        _hover={{
          color: "#386B99",
        }}
      >
        {children}
      </NavLink>
    </Box>
  );
};
