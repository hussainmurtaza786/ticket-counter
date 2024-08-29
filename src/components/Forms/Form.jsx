import React from "react";
import Movie from "./Movie";
import { Box } from "@chakra-ui/react";
import Modal from "../UI/Modal";
import Transportation from "./Transportation";
import Sport from "./Sport";
import Login from "./Login";
import Signup from "./Signup";

function Form({ onClose, formType }) {
  return (
    <Modal onClose={onClose}>
      <Box>
        {formType === "Movie" && <Movie onClose={onClose} />}
        {formType === "Transportation" && <Transportation onClose={onClose} />}
        {formType === "Sports" && <Sport onClose={onClose} />}
        {formType === "Login" && <Login onClose={onClose} />}
        {formType === "Signup" && <Signup onClose={onClose} />}
      </Box>
    </Modal>
  );
}

export default Form;
