import React from "react";
import { Box } from "@chakra-ui/react";
import Modal from "../UI/Modal";
import Login from "./Login";
import Signup from "./Signup";

function Form({ onClose, formType }) {
  return (
    <Modal onClose={onClose}>
      <Box>
        {formType === "Login" && <Login onClose={onClose} />}
        {formType === "Signup" && <Signup onClose={onClose} />}
      </Box>
    </Modal>
  );
}

export default Form;
