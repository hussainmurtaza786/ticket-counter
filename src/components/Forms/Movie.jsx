import {
  Box, Button, VStack, Image, FormControl, FormLabel, Input, CloseButton, Text, Select,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { movieFormSchema } from "../../Schemas/Index";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTicketThunk } from "../../store/ticketSlice";

function Movie({ onClose }) {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.user.id);
  const loader = useSelector(state => state.ticket.fetchingState.loadTickets)

console.log('movie loader ==>', loader)
  const onSubmit = async (values) => {
    console.log("Submitting form with values:", values);
    try {
      const unixTimestamp = new Date(values.timestamp).getTime() / 1000;
      const data = {
        ...values,
        timestamp: unixTimestamp,
        userId: userId
      };

      await dispatch(addMovieTicketThunk(data));
      onClose();
    } catch (error) {
      // console.error("Error submitting form:", error);
      alert(error.message);
    }

  };

  const { values, errors, touched, isValid, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        timestamp: "",
        price: "",
        seat: "",
        genre: "",
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
      overflowY="auto"
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
          {loader && <Text>loading...</Text>}
          <FormControl isInvalid={touched.name && errors.name}>
            <FormLabel>Movie Name</FormLabel>
            <Input required
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

          <FormControl isInvalid={touched.genre && errors.genre}>
            <FormLabel>Movie Genre</FormLabel>
            <Select required
              name="genre"
              value={values.genre}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Select genre"
            >
              <option value="Funny">Funny</option>
              <option value="Action">Action</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Romance">Romance</option>
              <option value="Adventure">Adventure</option>
            </Select>
            {touched.genre && errors.genre && (
              <Text color="red.500" fontSize="sm">
                {errors.genre}
              </Text>
            )}
          </FormControl>

          <FormControl isInvalid={touched.price && errors.price}>
            <FormLabel>Price</FormLabel>
            <Input required
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
            <Input required
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

          <FormControl isInvalid={touched.timestamp && errors.timestamp}>
            <FormLabel>Time Stamp</FormLabel>
            <Input required
              value={values.timestamp}
              onChange={handleChange}
              onBlur={handleBlur}
              name="timestamp"
              type="datetime-local"
            />
            {touched.timestamp && errors.timestamp && (
              <Text color="red.500" fontSize="sm">
                {errors.timestamp}
              </Text>
            )}
          </FormControl>

          <Button spacing={4} mt={4} colorScheme="teal" type="submit" aria-disabled={!isValid || isSubmitting} disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default Movie;
