import { Box, Button, ButtonGroup, Icon, Stack } from "@chakra-ui/react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import React from "react";
import { useSelector } from "react-redux";

function Auth({ onLogout, showForm }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Box>
      {/* Stack for responsive button layout */}
      <Stack
        direction={{ base: "column", sm: "row" }}
        spacing={2}
        align="center"
        width="100%" // Ensure full width on smaller screens
      >
        {!isAuthenticated && (
          <Button
            onClick={() => showForm("Login")}
            leftIcon={<Icon as={FaSignInAlt} />}
            bgGradient="linear(to-r, teal.500, green.500)"
            color="white"
            fontSize={{ base: "md", md: "lg" }} // Adjust font size for responsiveness
            fontWeight="bold"
            px={6}
            py={4}
            width={{ base: "100%", md: "auto" }} // Full width on mobile, auto on larger screens
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

        {!isAuthenticated && (
          <Button
            onClick={() => showForm("Signup")}
            leftIcon={<Icon as={FaSignInAlt} />}
            bgGradient="linear(to-r, #007bff, #0056b3)"
            color="white"
            fontSize={{ base: "md", md: "lg" }} // Adjust font size for responsiveness
            fontWeight="bold"
            px={6}
            py={4}
            width={{ base: "100%", md: "auto" }} // Full width on mobile, auto on larger screens
            borderRadius="md"
            boxShadow="lg"
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
          </Button>
        )}

        {isAuthenticated && (
          <Button
            onClick={onLogout}
            leftIcon={<Icon as={FaSignOutAlt} />}
            bgGradient="linear(to-r, red.500, orange.500)"
            color="white"
            fontSize={{ base: "md", md: "lg" }} // Adjust font size for responsiveness
            fontWeight="bold"
            px={6}
            py={4}
            width={{ base: "100%", md: "auto" }} // Full width on mobile, auto on larger screens
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
      </Stack>
    </Box>
  );
}

export default Auth;
