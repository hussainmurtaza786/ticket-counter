import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Form from "../Forms/Form";
import WebText from "./Text";
import TicketList from "./TicketList";
import Auth from "../Navbar/Auth";
import ImageSlider from "./ImageSlider";
import TicketButton from "./TicketBtn";

function Home() {
  const [formType, setFormType] = useState("");
  const [isLogged, setIsLogged] = useState(false)
  const [showTicket, setShowTicket] = useState(false)

  const showForm = (_formType) => setFormType(_formType);
  const authHandler = () => setIsLogged(true)
  const showTicketHandler = () => setShowTicket(true)
  const onClose = () => setFormType("")
  const logoutHandler = () => {
    setFormType("")
    setIsLogged(false)
    console.log('Logout Handler ')
  }

  return (
    <>
      <Box >
        <ImageSlider />
      </Box>

      <Box position='absolute' bottom='20rem' left='4rem'>
        {isLogged && showTicket && <TicketList showForm={showForm} />}
      </Box>

      <Box>
        {formType && <Form onClose={onClose} auth={authHandler} formType={formType} />}
      </Box>

      <Box position="absolute" top={{ base: "4rem", md: "6rem" }} width="100%">
        <WebText />
      </Box>

      <Box>
        {isLogged && <TicketButton showTicket={showTicketHandler} />}
      </Box>

      <Box position="absolute" right="0" top="1rem">
        <Auth onLogout={logoutHandler} isLogged={isLogged} showForm={showForm} />
      </Box>

    </>
  );
}

export default Home;
