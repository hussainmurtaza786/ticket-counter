import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function Items() {
  return (
    <Box color={"whitesmoke"}>
      <Flex
        direction={{ base: "column", md: "row" }}  // Change direction based on screen size
        alignItems={{ base: "center", md: "initial" }}  // Center items in the column layout
      >
        <ListStyle path='/'>Home</ListStyle>
        <ListStyle path='/ticket'>Ticket</ListStyle>
        <ListStyle path='/contact'>Contact</ListStyle>
        <ListStyle path='/about'>About</ListStyle>
        <ListStyle path='/review'>Review</ListStyle>
      </Flex>
    </Box>
  );
}

export default Items;

const ListStyle = ({ children, path }) => {
  return (
    <Box m={4} p={2} zIndex={1000000} userSelect='none' borderRadius="md">
      <NavLink
        to={path}
        style={({ isActive }) => ({
          fontSize: '20px',
          color: isActive ? '#386B99' : 'black',
          textDecoration: 'none',
          transition: 'transform 0.3s ease, color 0.3s ease',
          transform: isActive ? 'scale(1.1)' : 'scale(1)',
          outline: 'none',
        })}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#386B99';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          if (!e.currentTarget.classList.contains('active')) {
            e.currentTarget.style.color = 'black';
            e.currentTarget.style.transform = 'scale(1)';
          }
        }}
      >
        {children}
      </NavLink>
    </Box>
  );
};
