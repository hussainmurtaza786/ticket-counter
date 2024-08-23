import { Box, } from "@chakra-ui/react";
import React, { useState } from "react";
import Form from "../Forms/Form";
import WebText from "./Text";
import TicketList from "./TicketList";
import Auth from "../Navbar/Auth";
import ImageSlider from "./ImageSlider";
import TicketButton from "./TicketBtn";
import { useDispatch, useSelector } from "react-redux";
import { authAction} from '../../store/authSlice'
function Home() {
  const [formType, setFormType] = useState("");
  const [showTicket, setShowTicket] = useState(false)

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  // console.log("isAuthenticated ==>", isAuthenticated)

  const dispatch = useDispatch()

  const showForm = (_formType) => setFormType(_formType);
  const showTicketHandler = () => setShowTicket(true)
  const onClose = () => setFormType("")
  const logoutHandler = () => {
    setFormType("")
    dispatch(authAction.logout())
  }

  return (
    <>
      <Box >
        <ImageSlider />
      </Box>

      <Box position='absolute' bottom='20rem' left='4rem'>
        {isAuthenticated && showTicket && <TicketList showForm={showForm} />}
      </Box>

      <Box>
        {formType && <Form onClose={onClose} formType={formType} />}
      </Box>

      <Box position="absolute" top={{ base: "4rem", md: "6rem" }} width="100%">
        <WebText />
      </Box>

      <Box>
        {isAuthenticated && <TicketButton showTicket={showTicketHandler} />}
      </Box>

      <Box position="absolute" right="0" top="1rem">
        <Auth onLogout={logoutHandler} showForm={showForm} />
      </Box>

    </>
  );
}

export default Home;
