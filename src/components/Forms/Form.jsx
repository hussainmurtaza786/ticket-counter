import React from "react";
import Movie from "./Movie";
import { Box } from "@chakra-ui/react";
import Modal from "../UI/Modal";
import Flight from "./Flight";
import Sport from "./Sport";
import Login from "./Login";
import Signup from "./Signup";

function Form({ formType, showForm, onLogin,isSignin }) {
  return (
    formType && (
      <Modal onClose={e => { showForm("") }} >
        <Box
        // display="flex"
        // justifyContent="center"
        // alignItems="center"
        // m="8rem 0rem"
        >
          {formType === "Movie" && <Movie onClose={showForm} />}
          {formType === "Flight" && <Flight onClose={showForm} />}
          {formType === "Sports" && <Sport onClose={showForm} />}
          {formType === "LogIn" && <Login onLogin={onLogin} onClose={showForm} />}
          {formType === "Signup" && < Signup isSignin={isSignin} onClose={showForm} />}

        </Box>
      </Modal>
    )
  );
}

export default Form;
