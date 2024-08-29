import React from 'react'
import { Button, FormControl, FormLabel, Input, Text, VStack, } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { tennisSchema } from '../../Schemas/Index';
import { useDispatch, useSelector } from 'react-redux';
import { addSportTicketThunk } from '../../store/ticketSlice';

function Tennis({ selectedSport, onClose }) {
  const userId = useSelector(state => state.auth.user.id);
  const dispatch = useDispatch()

  const onSubmit = async (values) => {
    console.log("Submitting form with values:", values);
    try {
      const data = {
        ...values,
        sportType: selectedSport,
        userId: userId,
      };

      await dispatch(addSportTicketThunk(data)).unwrap();
      console.log("Sport Data ==>", data);
      onClose();
    } catch (error) {
      // console.error("Error submitting form:", error);
      alert(error.message);
    }


  };
  const { values, errors, touched, isValid, isSubmitting, handleBlur, handleChange, handleSubmit, } = useFormik({
    initialValues: {
      court: "",
      player1: "",
      player2: "",
      ticket: "",
      date: "",

    },
    validationSchema: tennisSchema,
    onSubmit,
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align='stretch'>

          <FormControl isInvalid={touched.date && errors.date}>
            <FormLabel>Match Date</FormLabel>
            <Input
              type="date"
              name="date"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.date && errors.date && (
              <Text color="red.500" fontSize="sm">
                {errors.date}
              </Text>
            )}
          </FormControl>

          <FormControl isInvalid={touched.court && errors.court}>
            <FormLabel> Court Name</FormLabel>
            <Input
              required
              name="court"
              value={values.court}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
            />
            {touched.court && errors.court && (
              <Text color="red.500" fontSize="sm">
                {errors.court}
              </Text>
            )}
          </FormControl>


          <FormControl isInvalid={touched.player1 && errors.player1}>
            <FormLabel> Player 1</FormLabel>
            <Input
              required
              name="player1"
              value={values.player1}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
            />
            {touched.player1 && errors.player1 && (
              <Text color="red.500" fontSize="sm">
                {errors.player1}
              </Text>
            )}
          </FormControl>


          <FormControl isInvalid={touched.player2 && errors.player2}>
            <FormLabel> Player 2</FormLabel>
            <Input
              required
              name="player2"
              value={values.player2}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
            />
            {touched.player2 && errors.player2 && (
              <Text color="red.500" fontSize="sm">
                {errors.player2}
              </Text>
            )}
          </FormControl>


          <FormControl isInvalid={touched.ticket && errors.ticket}>
            <FormLabel> Number of ticket</FormLabel>
            <Input
              required
              name="ticket"
              value={values.ticket}
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
            />
            {touched.ticket && errors.ticket && (
              <Text color="red.500" fontSize="sm">
                {errors.ticket}
              </Text>
            )}
          </FormControl>



          <Button spacing={4} mt={4} colorScheme="teal" type="submit" aria-disabled={!isValid || isSubmitting} disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </VStack>
      </form>
    </div>
  )
}

export default Tennis
