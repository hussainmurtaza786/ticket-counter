import React from "react";
import { Button, FormControl, FormLabel, Input, Text, VStack, } from "@chakra-ui/react";
import { useFormik } from "formik";
import { planeSchema } from "../../Schemas/Index";
import { addTransportTicketThunk } from "../../store/ticketSlice";
import { useDispatch, useSelector } from "react-redux";

function Plane({ selectedTransport, onClose }) {
  const userId = useSelector(state => state.auth.user.id);
  const dispatch = useDispatch()

  const onSubmit = async (values) => {
    console.log("Submitting form with values:", values);
    try {
      const data = {
        ...values,
        transportType: selectedTransport,
        userId: userId,
      };

      await dispatch(addTransportTicketThunk(data)).unwrap();
      console.log("Plane Data ==>", data);
      onClose();
    } catch (error) {
      // console.error("Error submitting form:", error);
      alert(error.message);
    }


  };

  const { values, errors, touched, isValid, isSubmitting, handleBlur, handleChange, handleSubmit, } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      passengers: "",
      depAirport: "",
      desAirport: "",
      depDate: "",
      depTime: "",
      returnDate: "",
      returnTime: "",
    },
    validationSchema: planeSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="stretch">
        <FormControl isInvalid={touched.name && errors.name}>
          <FormLabel> Name</FormLabel>
          <Input
            required
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder="John"
          />
          {touched.name && errors.name && (
            <Text color="red.500" fontSize="sm">
              {errors.name}
            </Text>
          )}
        </FormControl>

        <FormControl id="email" isInvalid={touched.email && errors.email}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="your@example.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <Text color="red.500" fontSize="sm">
              {errors.email}
            </Text>
          )}
        </FormControl>

        <FormControl id="phone" isInvalid={touched.phone && errors.phone}>
          <FormLabel> Phone Number</FormLabel>
          <Input
            type="tel"
            name="phone"
            placeholder="03218596587"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.phone && errors.phone && (
            <Text color="red.500" fontSize="sm">
              {errors.phone}
            </Text>
          )}
        </FormControl>

        <FormControl isInvalid={touched.passengers && errors.passengers}>
          <FormLabel> Number of Passengers</FormLabel>
          <Input
            type="number"
            name="passengers"
            placeholder="3"
            value={values.passengers}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.passengers && errors.passengers && (
            <Text color="red.500" fontSize="sm">
              {errors.passengers}
            </Text>
          )}
        </FormControl>

        <FormControl isInvalid={touched.depAirport && errors.depAirport}>
          <FormLabel>Departure Airport</FormLabel>
          <Input
            type="text"
            name="depAirport"
            value={values.depAirport}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.depAirport && errors.depAirport && (
            <Text color="red.500" fontSize="sm">
              {errors.depAirport}
            </Text>
          )}
        </FormControl>

        <FormControl isInvalid={touched.desAirport && errors.desAirport}>
          <FormLabel>Destination Airport</FormLabel>
          <Input
            name="desAirport"
            type="text"
            value={values.desAirport}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.desAirport && errors.desAirport && (
            <Text color="red.500" fontSize="sm">
              {errors.desAirport}
            </Text>
          )}
        </FormControl>

        <FormControl isInvalid={touched.depDate && errors.depDate}>
          <FormLabel>Departure Date</FormLabel>
          <Input
            type="date"
            name="depDate"
            value={values.depDate}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.depDate && errors.depDate && (
            <Text color="red.500" fontSize="sm">
              {errors.depDate}
            </Text>
          )}
        </FormControl>

        <FormControl isInvalid={touched.depTime && errors.depTime}>
          <FormLabel>Departure Time</FormLabel>
          <Input
            type="time"
            name="depTime"
            value={values.depTime}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.depTime && errors.depTime && (
            <Text color="red.500" fontSize="sm">
              {errors.depTime}
            </Text>
          )}
        </FormControl>

        <FormControl isInvalid={touched.returnDate && errors.returnDate}>
          <FormLabel>Return Date</FormLabel>
          <Input
            type="date"
            value={values.returnDate}
            name="returnDate"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.returnDate && errors.returnDate && (
            <Text color="red.500" fontSize="sm">
              {errors.returnDate}
            </Text>
          )}
        </FormControl>

        <FormControl isInvalid={touched.returnTime && errors.returnTime}>
          <FormLabel>Return Time</FormLabel>
          <Input
            value={values.returnTime}
            type="time"
            name="returnTime"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.returnTime && errors.returnTime && (
            <Text color="red.500" fontSize="sm">
              {errors.returnTime}
            </Text>
          )}
        </FormControl>

        <Button spacing={4} mt={4} colorScheme="teal" type="submit" aria-disabled={!isValid || isSubmitting} disabled={!isValid || isSubmitting}>
            Submit
          </Button>
      </VStack>
    </form>
  );
}

export default Plane;
