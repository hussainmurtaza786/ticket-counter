import { Box, Flex, Select } from "@chakra-ui/react";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

function Items() {
  const navigate = useNavigate();

  const handleRouteChange = (e) => {
    const path = e.target.value;
    if (path) {
      navigate(path);
      console.log(path);
    }
  };

  return (
    <Box color={"whitesmoke"}>
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "initial" }}
      >
        <ListStyle path="/">Home</ListStyle>
        <ListStyle path="/contact">Contact</ListStyle>
        <ListStyle path="/about">About</ListStyle>
        <ListStyle path="/review">Review</ListStyle>
        <ListStyle path="/ticket">Tickets</ListStyle>

        {/* <Box m={4} userSelect="none">
          <Select
            color="black"
            outline="none"
            fontSize="20px"
            cursor="pointer"
            border="none"
            onChange={handleRouteChange}
            icon={<MdArrowDropDown />}
            defaultValue="/ticket"
          >
            <option value="/ticket">Tickets</option>
            <option value="/contact">Movies</option>
            <option value="/sport">Sport</option>
            <option value="/flight">Flight</option>
          </Select>
        </Box> */}
      </Flex>
    </Box>
  );
}

export default Items;

const ListStyle = ({ children, path }) => {
  return (
    <Box m={4} p={2} zIndex={1000000} userSelect="none" borderRadius="md">
      <NavLink
        to={path}
        style={({ isActive }) => ({
          fontSize: "20px",
          color: isActive ? "#386B99" : "black",
          textDecoration: "none",
          transition: "transform 0.3s ease, color 0.3s ease",
          transform: isActive ? "scale(1.1)" : "scale(1)",
          outline: "none",
        })}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#386B99";
          e.currentTarget.style.transform = "scale(1.1)";
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
