import { Box } from "@chakra-ui/react";
import Items from "./Items";
import Logo from "./Logo";

function Navbar(props) {
  return (
    <Box display="flex" bgColor="#B0C4DE   " opacity="0.7">
      <Logo />
      <Box display='flex' justifyContent='center' width='40%'  >
        <Items />
      </Box>
    </Box>
  );
}

export default Navbar;
