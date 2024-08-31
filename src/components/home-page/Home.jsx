import { Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import Form from "../Forms/Form";
import WebText from "./Text";
import TicketList from "./TicketList";
import background from "../../background.png";
import TicketButton from "./TicketBtn";
import { useSelector } from "react-redux";

function Home({ showForm, setFormType, formType }) {
  const [showTicket, setShowTicket] = useState(false);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const toggleTicketHandler = () => setShowTicket((prev) => !prev);
  const onClose = () => setFormType("");

  return (
    <Box>
      {/* Image and text container */}
      <Box
        backgroundColor="#1a1a1a"
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

      {/* Form Modal */}
      <Box position="relative" zIndex="1">
        {formType && <Form onClose={onClose} formType={formType} />}
      </Box>
    </Box>
  );
}

export default Home;
