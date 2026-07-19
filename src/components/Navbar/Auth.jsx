import { Box, Button, Stack } from "@chakra-ui/react";
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
            <Button
              onClick={() => showForm("Login")}
              variant="ghost"
              color="gray.600"
              fontWeight="500"
              fontSize="sm"
              size="sm"
              _hover={{ bg: "gray.50", color: "teal.600" }}
            >
              Sign In
            </Button>
            <Button
              onClick={() => showForm("Signup")}
              colorScheme="teal"
              fontWeight="500"
              fontSize="sm"
              size="sm"
              px={4}
              _hover={{ transform: "translateY(-1px)", boxShadow: "md" }}
              transition="all 0.2s"
            >
              Sign Up
            </Button>
          </>
        )}

        {isAuthenticated && (
          <Button
            onClick={onLogout}
            variant="outline"
            colorScheme="red"
            fontWeight="500"
            fontSize="sm"
            size="sm"
            px={4}
          >
            Sign Out
          </Button>
        )}
      </Stack>
    </Box>
  );
}

export default Auth;
