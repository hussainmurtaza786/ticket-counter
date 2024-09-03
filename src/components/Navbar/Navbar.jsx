import { Box, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Items from "./Items";
import Logo from "./Logo";
import Auth from "./Auth";
import { authAction } from "../../store/authSlice";
import { useDispatch } from "react-redux";

function Navbar({ showForm }) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

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

      {/* Toggle Button for Small Screens */}
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          aria-label="Open Menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="outline"
          onClick={isOpen ? onClose : onOpen}
        />
      </Box>

      {/* Normal Navbar Items (hidden on small screens) */}
      <Box
        flex="1"
        display={{ base: "none", md: "flex" }}
        justifyContent="center"
      >
        <Items />
      </Box>

      <Box display={{ base: "none", md: "block" }}>
        <Auth onLogout={logoutHandler} showForm={showForm} />
      </Box>

      {/* Drawer for Small Screens */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <Items />
              <Auth onLogout={logoutHandler} showForm={showForm} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

export default Navbar;
