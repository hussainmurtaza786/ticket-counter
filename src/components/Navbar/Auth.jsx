import { Box, Button, Stack, Icon } from "@chakra-ui/react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

function Auth({ onLogout, showForm }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Box>
      <Stack
        direction={{ base: "column", sm: "row" }}
        spacing={2}
        align="center"
        width="100%"
      >
        {!isAuthenticated && (
          <>
            {/* Sign In Button */}
            <Button
              onClick={() => showForm("Login")}
              leftIcon={<Icon as={FaSignInAlt} />}
              bgGradient="linear(to-r, teal.500, green.500)"
              color="white"
              fontSize={{ base: "sm", md: "lg" }}
              fontWeight="bold"
              px={4}
              py={3}
              width={{ base: "100%", md: "auto" }}
              borderRadius="md"
              boxShadow="lg"
              _hover={{ bgGradient: "linear(to-r, teal.600, green.600)", transform: "scale(1.05)" }}
              _active={{ bgGradient: "linear(to-r, teal.700, green.700)", transform: "scale(0.95)" }}
              _focus={{ boxShadow: "outline" }}
            >
              Sign In
            </Button>

            {/* Sign Up Button */}
            <Button
              onClick={() => showForm("Signup")}
              leftIcon={<Icon as={FaSignInAlt} />}
              bgGradient="linear(to-r, blue.500, blue.700)"
              color="white"
              fontSize={{ base: "sm", md: "lg" }}
              fontWeight="bold"
              px={4}
              py={3}
              width={{ base: "100%", md: "auto" }}
              borderRadius="md"
              boxShadow="lg"
              _hover={{ bgGradient: "linear(to-r, blue.600, blue.800)", transform: "scale(1.05)" }}
              _active={{ bgGradient: "linear(to-r, blue.700, blue.900)", transform: "scale(0.95)" }}
              _focus={{ boxShadow: "outline" }}
            >
              Sign Up
            </Button>
          </>
        )}

        {isAuthenticated && (
          <Button
            onClick={onLogout}
            leftIcon={<Icon as={FaSignOutAlt} />}
            bgGradient="linear(to-r, red.500, orange.500)"
            color="white"
            fontSize={{ base: "sm", md: "lg" }}
            fontWeight="bold"
            px={4}
            py={3}
            width={{ base: "100%", md: "auto" }}
            borderRadius="md"
            boxShadow="lg"
            _hover={{ bgGradient: "linear(to-r, red.600, orange.600)", transform: "scale(1.05)" }}
            _active={{ bgGradient: "linear(to-r, red.700, orange.700)", transform: "scale(0.95)" }}
            _focus={{ boxShadow: "outline" }}
          >
            Sign Out
          </Button>
        )}
      </Stack>
    </Box>
  );
}

export default Auth;
