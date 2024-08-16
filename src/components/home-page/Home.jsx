import { Box, Image, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Form from "../Forms/Form";
import WebText from "./Text";
import TicketList from "./TicketList";
import Slider from "react-slick";
import Auth from "../Navbar/Auth";

function Home() {
  const [formType, setFormType] = useState("");

  const showForm = (_formType) => {
    setFormType(_formType);
  };
  const [ticket, setTicket] = useState(false);

  const showTicket = () => {
    setTicket(true);
  };

  const [isLogged, setIsLogged] = useState(false);

  const onLogin = () => {
    setIsLogged(true);
  };

  const onLogout = () => {
    setIsLogged(false)
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [
    "https://www.popsci.com/wp-content/uploads/2022/07/11/josue-isai-ramos-figueroa-n2NBgIx3A28-unsplash.jpg?text=Event+1",
    "https://wallpapers.com/images/hd/sports-balls-in-4k-4tcqtsgp899vx4f4.jpg?text=Event+2",
    "https://wallpapers.com/images/hd/movie-theater-background-2048-x-1536-9wlq655dcp63cdi8.jpg?text=Event+3",
  ];

  return (
    <>
      <Box
        maxW="100%"
        mx="auto"
        overflow="hidden"
        borderRadius="md"
        boxShadow="lg"
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box display="flex" flexDirection="column" key={index}>
              <Image width="100%" src={image} alt={`Event ${index + 1}`} />
            </Box>
          ))}
        </Slider>
      </Box>

      <Box position="absolute" top="30rem" zIndex={100}>
        {ticket && <TicketList showMovie={showForm} />}
      </Box>

      <Form onLogin={onLogin} showMovie={setFormType} formType={formType} />

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
        <Auth isLoggedout={onLogout} isLoggedin={isLogged} loginForm={setFormType} />
      </Box>
    </>
  );
}

export default Home;
