import { Box } from "@chakra-ui/react";
import Items from "./Items";
import Logo from "./Logo";
import Auth from "./Auth";
import { authAction } from "../../store/authSlice";
import { useDispatch } from "react-redux";

function Navbar({ showForm }) {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authAction.logout());
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      zIndex={1}
      bgColor="#B0C4DE"
      px="20px"
      position="sticky"
      top="0" 
    >
      <Box>
        <Logo />
      </Box>

      <Box flex="1" display="flex" justifyContent="center">
        <Items />
      </Box>

      <Box>
        <Auth onLogout={logoutHandler} showForm={showForm} />
      </Box>
    </Box>
  );
}

export default Navbar;
