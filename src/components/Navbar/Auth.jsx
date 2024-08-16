import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";

function Auth({ loginForm, isLogged ,onLogout }) {
  return (
    <Box>
      <ButtonGroup m={4}>
        {!isLogged && (
          <Button onClick={() => loginForm("LogIn")}>Sign IN</Button>
        )}
        {isLogged && <Button onClick={onLogout} >Sign Out</Button>}
      </ButtonGroup>
    </Box>
  );
}

export default Auth;
