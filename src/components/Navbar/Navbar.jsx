import {
  Box,
} from "@chakra-ui/react";
import Items from "./Items";
import Logo from "./Logo";



function Navbar(props) {

  return (
    <Box bgColor='white' zIndex={100} opacity={0.4}>
      <Logo />
      <Items />
    </Box>


  );
}

export default Navbar;
