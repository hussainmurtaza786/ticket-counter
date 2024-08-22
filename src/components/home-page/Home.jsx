import { Box,  Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Form from "../Forms/Form";
import WebText from "./Text";
import TicketList from "./TicketList";
import Auth from "../Navbar/Auth";
import ImageSlider from "./Slider";
import TicketBtn from "./Button";

function Home() {
  const [formType, setFormType] = useState("");

  const showForm = (_formType) => {
    setFormType(_formType);
  };

  return (
    <>
      <ImageSlider />
      <Box
        position="absolute"
        top={{ base: "20rem", md: "30rem" }}
        zIndex={100}
        width={{ base: "100%", md: "auto" }}
      >
        <TicketList />
      </Box>

      <Form formType={formType} />

      <Box position="absolute" top={{ base: "4rem", md: "6rem" }}>
        <WebText />
      </Box>

      <TicketBtn />

      <Box position="absolute" right="0">
        <Auth />
      </Box>
    </>
  );
}

export default Home;
