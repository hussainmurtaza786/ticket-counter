import {
  Box,
  Button,
  Flex,
  Image,
  FormControl,
  FormLabel,
  Input,
  VStack,
  CloseButton,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { movieFormSchema } from "../../Schemas/Index";
import { useDispatch } from "react-redux";
import { moviesThunk } from "../../store/movieSlice";

function Movie({ onClose }) {
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    try {
      // await dispatch(moviesThunk(values));
      console.log("Values==>", values);
      onClose();
    } catch (error) {
      alert(error);
    }
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        timestamp: "",
        price: "",
        seat: "",
        genre: "",
        userId: "",
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
      p="20px"
      overflow-y="auto"
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
          <FormControl isInvalid={touched.name && errors.name}>
            <FormLabel>Movie Name</FormLabel>
            <Input
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
            />
            {touched.name && errors.name && (
              <Text color="red.500" fontSize="sm">
                {errors.name}
              </Text>
            )}
          </FormControl>

          <FormControl isInvalid={touched.price && errors.price}>
            <FormLabel>Price</FormLabel>
            <Input
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              name="price"
              type="number"
            />
            {touched.price && errors.price && (
              <Text color="red.500" fontSize="sm">
                {errors.price}
              </Text>
            )}
          </FormControl>
          <FormControl isInvalid={touched.seat && errors.seat}>
            <FormLabel>Seat</FormLabel>
            <Input
              value={values.seat}
              onChange={handleChange}
              onBlur={handleBlur}
              name="seat"
              type="number"
            />
            {touched.seat && errors.seat && (
              <Text color="red.500" fontSize="sm">
                {errors.seat}
              </Text>
            )}
          </FormControl>

       

          <Flex justifyContent="space-between">
            {/* <FormControl
              isInvalid={touched.genre && errors.genre}
              width="48%"
            >
              <FormLabel>Movie Genre</FormLabel>
              <Input
                name="genre"
                value={values.genre}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
              />
                {touched.genre && errors.genre && (
              <Text color="red.500" fontSize="sm">
                {errors.genre}
              </Text>
            )}
            </FormControl> */}

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
