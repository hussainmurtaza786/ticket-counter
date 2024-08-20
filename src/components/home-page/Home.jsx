import { Box, Image, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Form from "../Forms/Form";
import WebText from "./Text";
import TicketList from "./TicketList";

import Auth from "../Navbar/Auth";
import Slider from "./Slider";

function Home() {
  const [formType, setFormType] = useState("");

  const showForm = (_formType) => {
    setFormType(_formType);
    console.log('formType ==>' ,_formType)

  }

  const [ticket, setTicket] = useState(false);

  const showTicket = () => {
    setTicket(true);
  };

  const [isLogged, setIsLogged] = useState(false);
  const [isSignin, setIsSignin] = useState(false)


  const onLogin = () => {
    setIsLogged(true);
  };

  const onSignin = () => {
    setIsSignin(true)
  }
  const onLogout = () => {
    setIsSignin(false)
    setIsLogged(false)
  };

  

  

  return (
    <>


      <Box position="absolute" top="30rem" zIndex={100}>
        {isLogged && ticket && !formType && <TicketList showForm={showForm} />}
      </Box>

      <Form isSignin={onSignin} onLogin={onLogin} showForm={setFormType} formType={formType} />

      <Box position="absolute" top="6rem">
        <WebText />
      </Box>

      {isLogged && (
        <Button
          width="180px"
          height="60px"
          position="absolute"
          top="25rem"
          m="0px 4rem"
          onClick={showTicket}
          bg="blue.500"
          color="white"
          fontSize="lg"
          fontWeight="bold"
          px={6}
          py={4}
          borderRadius="md"
          boxShadow="lg"
          _hover={{
            bg: "blue.600",
            transform: "scale(1.05)",
          }}
          _active={{
            bg: "blue.700",
            transform: "scale(0.95)",
          }}
          _focus={{
            boxShadow: "outline",
          }}
        >
          Show Tickets
        </Button>
      )}

      <Box position="absolute" right="0">
        <Auth isLoggedout={onLogout} isLogged={isLogged} loginForm={setFormType} />
      </Box>
    </>
  );
}

export default Home;
