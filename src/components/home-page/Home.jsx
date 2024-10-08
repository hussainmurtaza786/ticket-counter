import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import WebText from "./Text";
import background from "../../background.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box>
      <Box
        backgroundColor="#1a1a1a"
        width="100%"
        position="relative"
        textAlign="center"
        color="white"
      >
        <Image width="100%" height="100vh" objectFit="cover" opacity={0.3} src={background} />

        <Box
          width={{ base: "100%", sm:"70%" }}
          position="absolute"
          top={{ base: "30%" }}
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="1"
        >
          <WebText />
        </Box>
      </Box>

      <Box
        position="absolute"
        bottom={{
          base: "17rem",
          sm: '12rem',
          md: "10rem",
          lg: "12rem",
          xl: "17rem",
          "2xl": "40rem",

        }}
        left="50%"
        transform="translateX(-50%)"
        zIndex="1"
      >
        <Link to="/contact">
          <Box
            padding="1rem 2rem"
            borderRadius="md"
            backgroundColor="transparent"
            color="white"
            fontWeight="bold"
            textAlign="center"
            boxShadow="0 0 15px rgba(0, 255, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.5)"
            transition="all 0.3s ease"
            _hover={{
              boxShadow: "0 0 20px rgba(0, 255, 255, 1), 0 0 40px rgba(0, 255, 255, 1), 0 0 80px rgba(0, 255, 255, 1)",
            }}
          >
            Contact Us
          </Box>
        </Link>
      </Box>



    </Box>
  );
}

export default Home;

