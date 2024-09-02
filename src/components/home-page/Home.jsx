import { Box, Button, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import WebText from "./Text";
import TicketList from "./TicketList";
import background from "../../background.png";
import TicketButton from "./TicketBtn";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Home({ showForm }) {
  const [showTicket, setShowTicket] = useState(false);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const toggleTicketHandler = () => setShowTicket((prev) => !prev);

  return (
    <Box >
      {/* Image and text container */}
      <Box
        backgroundColor="#1a1a1a"
        // bgColor={['pink', 'green', 'purple', 'orange']}
        // bgColor={{base:'pink', lg:'purple', 'xl':'maroon'}}
        width="100%"
        position="relative"
        textAlign="center"
        color="white"
      >
        <Image width="100%" opacity={0.3} src={background} />

        {/* Overlaying Text */}
        <Box
          position="absolute"
          top="40%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="1"
        >
          <WebText />

        </Box>
      </Box>

      {/* Show Ticket Button */}
      <Box
        position="absolute"
        bottom="17rem"
        left="50%"
        transform="translateX(-50%)"
        zIndex="1"
      >
        {isAuthenticated && (
          <TicketButton isShowing={showTicket} toggle={toggleTicketHandler} />
        )}


      </Box>

      <Box position="absolute"
        bottom="17rem"
        left="47rem"
        transform="translateX(-50%)"
        zIndex="1"
        width='400px'
      >
        {!isAuthenticated &&
          <ListStyle path='/contact'>Contact</ListStyle>
        }
      </Box>




      {/* Ticket List */}
      <Box
        position="absolute"
        bottom="10rem"
        left="50%"
        transform="translateX(-50%)"
        zIndex="1"
      >
        {isAuthenticated && showTicket && <TicketList showForm={showForm} />}

      </Box>

    </Box>
  );
}

export default Home;




const ListStyle = ({ children, path }) => {
  return (
    <Box m={4} p={2} zIndex={1000000} userSelect='none' borderRadius="md">
      <NavLink
        to={path}
        style={({ isActive }) => ({
          fontSize: '20px',
          backgroundColor: 'white',
          color: '#386B99',
          textDecoration: 'none',
          transition: 'transform 0.3s ease, color 0.3s ease',
          padding: "12px",
          borderRadius: "12px",
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
