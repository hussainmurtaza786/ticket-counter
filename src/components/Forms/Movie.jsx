import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  FormControl,
  FormLabel,
  Input,
  VStack,
  CloseButton,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { movieFormSchema } from "../../Schemas/Index";
import { useDispatch } from "react-redux";
import { sendMovieData } from "../../store/movie-action";

function Movie({ onClose }) {
  const dispatch = useDispatch()
  const onSubmit = (values) => {
    onClose()
    dispatch(sendMovieData(values))
    console.log("Form Submitted", values);
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        email: "",
        lastName: "",
        movieName: "",
        time: "",
        date: ""
      },
      validationSchema: movieFormSchema,
      onSubmit,
    });

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="500px"
      height="100%"
      bgColor="whitesmoke"
      p="20px"
      boxShadow="xl"
      borderRadius="md"
      overflow-y='auto'

    >
      <CloseButton onClick={() => onClose(false)} fontSize="20px" color="red">
        X
      </CloseButton>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginBottom="20px"
      >
        <label
          style={{ margin: "15px 8px", fontSize: "30px", fontWeight: "bold" }}
        >
          Movie Ticket Form
        </label>
        <Image
          zIndex={1}
          width="100px"
          height="100px"
          src="https://static.vecteezy.com/system/resources/thumbnails/030/347/569/small_2x/ai-generated-image-of-delicious-popcorn-on-a-transparent-background-free-png.png"
          alt="Popcorn"
        />
      </Box>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isInvalid={touched.movieName && errors.movieName}>
            <FormLabel>Movie Name</FormLabel>
            <Input
              name="movieName"
              value={values.movieName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
            />
          </FormControl>

          <FormControl isInvalid={touched.date && errors.date}>
            <FormLabel>Date</FormLabel>
            <Input
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
              name="date"
              type="date"
            />
          </FormControl>

          <FormControl isInvalid={touched.time && errors.time}>
            <FormLabel>Time</FormLabel>
            <Input
              name="time"
              value={values.time}
              onChange={handleChange}
              onBlur={handleBlur}
              type="time"
            />
          </FormControl>

          <FormControl isInvalid={touched.email && errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
            />
          </FormControl>

          <Flex justifyContent="space-between">
            <FormControl
              isInvalid={touched.firstName && errors.firstName}
              width="48%"
            >
              <FormLabel>First Name</FormLabel>
              <Input
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
              />
            </FormControl>

            <FormControl
              isInvalid={touched.lastName && errors.lastName}
              width="48%"
            >
              <FormLabel>Last Name</FormLabel>
              <Input
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
              />
            </FormControl>
          </Flex>

          <Button spacing={4} mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default Movie;
