import React from "react";
import Movie from "./Movie";
import { Box } from "@chakra-ui/react";
import Modal from "../UI/Modal";
import Flight from "./Flight";
import Sport from "./Sport";
import Login from "./Login";
import Signup from "./Signup";

function Form({ onClose, formType, auth }) {

  return (
    <Modal onClose={onClose} >
      <Box>
        {formType === 'Movie' && <Movie />}
        {formType === 'Flight' && <Flight />}
        {formType === 'Sports' && <Sport />}
        {formType === 'Login' && <Login onClose={onClose} login={auth} />}
        {formType === 'Signup' && <Signup onClose={onClose} signup={auth} />}
      </Box>
    </Modal>
  );
}

export default Form;
