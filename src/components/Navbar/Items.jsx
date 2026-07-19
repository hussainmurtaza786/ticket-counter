import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Items({ onClose }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Box padding="10px">
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "center" }}
        justifyContent="center"
        wrap="nowrap"
        gap="4px"
      >
        <ListStyle onClick={onClose} path="/">
          Home
        </ListStyle>
        <ListStyle onClick={onClose} path="/ticket">
          Tickets
        </ListStyle>
        <ListStyle onClick={onClose} path="/about">
          About
        </ListStyle>
        <ListStyle onClick={onClose} path="/contact">
          Contact
        </ListStyle>
        {isAuthenticated && (
          <ListStyle path="/bookTicket">My Bookings</ListStyle>
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
      p="6px 14px"
      userSelect="none"
      borderRadius="md"
      onClick={onClick}
    >
      <NavLink
        to={path}
        style={({ isActive }) => ({
          fontSize: "15px",
          fontWeight: "500",
          color: isActive ? "teal" : "gray.600",
          textDecoration: "none",
          transition: "color 0.2s ease",
        })}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "teal";
        }}
        onMouseLeave={(e) => {
          if (!e.currentTarget.classList.contains("active")) {
            e.currentTarget.style.color = "gray.600";
          }
        }}
      >
        {children}
      </NavLink>
    </Box>
  );
};
