import React from "react";
import Movie from "./Movie";
import { Box } from "@chakra-ui/react";
import Modal from "../UI/Modal";
import Flight from "./Flight";
import Sport from "./Sport";
import Login from "./Login";
import Signup from "./Signup";

function Form() {
  return (
    <Modal>
      <Box>
        <Movie />
        <Flight />
        <Login />
        <Signup />
      </Box>
    </Modal>
  );
}

export default Form;
