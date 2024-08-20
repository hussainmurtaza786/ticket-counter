import { Box, Button, ButtonGroup, Icon } from "@chakra-ui/react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import React from "react";

function Auth({ loginForm, isLogged, isLoggedout, onSignin }) {
  return (
    <Box>
      <ButtonGroup m={4} spacing={4}>
        {!isLogged && (
          <Button
            onClick={() => loginForm("LogIn")}
            leftIcon={<Icon as={FaSignInAlt} />}
            bgGradient="linear(to-r, teal.500, green.500)"
            color="white"
            fontSize="lg"
            fontWeight="bold"
            px={6}
            py={4}
            borderRadius="md"
            boxShadow="lg"
            _hover={{
              bgGradient: "linear(to-r, teal.600, green.600)",
              transform: "scale(1.05)",
            }}
            _active={{
              bgGradient: "linear(to-r, teal.700, green.700)",
              transform: "scale(0.95)",
            }}
            _focus={{
              boxShadow: "outline",
            }}
          >
            Sign In
          </Button>

        )}

        {!isLogged && <Button
          onClick={() => loginForm("Signup")}
          leftIcon={<Icon as={FaSignInAlt} />}
          bgGradient="linear(to-r, #007bff, #0056b3)"
          color="white"
          fontSize="lg"
          fontWeight="bold"
          px={6}
          py={4}
          borderRadius="md"
          boxShadow="md"
          _hover={{
            bgGradient: "linear(to-r, #0056b3, #003d7a)",
            transform: "scale(1.05)",
          }}
          _active={{
            bgGradient: "linear(to-r, #003d7a, #001d3d)",
            transform: "scale(0.95)",
          }}
          _focus={{
            boxShadow: "outline",
          }}
        >
          Sign Up
        </Button>}




        {isLogged && (
          <Button
            onClick={isLoggedout}
            leftIcon={<Icon as={FaSignOutAlt} />}
            bgGradient="linear(to-r, red.500, orange.500)"
            color="white"
            fontSize="lg"
            fontWeight="bold"
            px={6}
            py={4}
            borderRadius="md"
            boxShadow="lg"
            _hover={{
              bgGradient: "linear(to-r, red.600, orange.600)",
              transform: "scale(1.05)",
            }}
            _active={{
              bgGradient: "linear(to-r, red.700, orange.700)",
              transform: "scale(0.95)",
            }}
            _focus={{
              boxShadow: "outline",
            }}
          >
            Sign Out
          </Button>
        )}
      </ButtonGroup>
    </Box>
  );
}

export default Auth;
