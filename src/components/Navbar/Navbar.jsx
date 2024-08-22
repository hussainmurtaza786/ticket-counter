import { Box } from "@chakra-ui/react";
import Items from "./Items";
import Logo from "./Logo";

function Navbar(props) {
  return (
    <Box
      display={{ base: "block", md: "flex" }} 
      // bgColor="#B0C4DE"
      opacity="0.7"
      p={{ base: "4", md: "2" }} 
    >
      <Logo />
      <Box
        display={{ base: "none", md: "flex" }} 
        justifyContent="center"
        width={{ base: "100%", md: "50%" }}   
      >
        <Items />
      </Box>
    </Box>
  );
}

export default Navbar;
