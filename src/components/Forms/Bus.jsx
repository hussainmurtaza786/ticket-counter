import React from "react";
import { Button, FormControl, FormLabel, Input, Text, VStack, } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { busSchema } from "../../Schemas/Index";
import { addTransportTicketThunk } from "../../store/ticketSlice";
import { useFormik } from "formik";

function Bus({selectedTransport,onClose}) {
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

      await dispatch(addTransportTicketThunk(data));
      console.log("Bus Data ==>", data);
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
      depLocation: "",
      desLocation: "",
      depDate: "",
      depTime: "",

    },
    validationSchema: busSchema,
    onSubmit,
  });

  return (
    <div>
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

          <FormControl isInvalid={touched.depLocation && errors.depLocation}>
            <FormLabel>Departure Location</FormLabel>
            <Input
              type="text"
              name="depLocation"
              value={values.depLocation}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.depLocation && errors.depLocation && (
              <Text color="red.500" fontSize="sm">
                {errors.depLocation}
              </Text>
            )}
          </FormControl>

          <FormControl isInvalid={touched.desLocation && errors.desLocation}>
            <FormLabel>Destination Location</FormLabel>
            <Input
              name="desLocation"
              type="text"
              value={values.desLocation}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.desLocation && errors.desLocation && (
              <Text color="red.500" fontSize="sm">
                {errors.desLocation}
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
          <Button spacing={4} mt={4} colorScheme="teal" type="submit" aria-disabled={!isValid || isSubmitting} disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </VStack>
      </form>
    </div>
  );
}

export default Bus;
