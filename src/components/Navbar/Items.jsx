import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Items({ onClose }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Box color={"whitesmoke"} padding="10px">
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "center" }}
        justifyContent="space-between"
        wrap="nowrap"
        gap="8px"
      >
        <ListStyle onClick={onClose} path="/">
          Home
        </ListStyle>
        <ListStyle onClick={onClose} path="/contact">
          Contact
        </ListStyle>
        <ListStyle onClick={onClose} path="/about">
          About
        </ListStyle>
        <ListStyle onClick={onClose} path="/review">
          Review
        </ListStyle>
        <ListStyle onClick={onClose} path="/ticket">
          Tickets
        </ListStyle>
        {isAuthenticated && (
          <ListStyle path="/bookTicket">Booked-Ticket</ListStyle>
        )}
      </Flex>
    </Box>
  );
}

export default Items;

const ListStyle = ({ children, path, onClick }) => {
  return (
    <Box
      m="0px"
      p="0px 10px"
      userSelect="none"
      borderRadius="md"
      onClick={onClick}
    >
      <NavLink
        to={path}
        style={({ isActive }) => ({
          fontSize: "18px",
          color: isActive ? "#386B99" : "black",
          textDecoration: "none",
          transition: "transform 0.2s ease, color 0.2s ease",
          transform: isActive ? "scale(1.05)" : "scale(1)",
          outline: "none",
        })}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#386B99";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          if (!e.currentTarget.classList.contains("active")) {
            e.currentTarget.style.color = "black";
            e.currentTarget.style.transform = "scale(1)";
          }
        }}
      >
        {children}
      </NavLink>
    </Box>
  );
};
