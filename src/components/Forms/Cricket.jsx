import React from 'react'
import { Button, FormControl, FormLabel, Input, Text, VStack, } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { cricketSchema } from '../../Schemas/Index';
import { useDispatch, useSelector } from 'react-redux';
import { addSportTicketThunk } from '../../store/ticketSlice';

function Cricket({ selectedSport, onClose }) {
  const userId = useSelector(state => state.auth.user.id);
  const loader = useSelector(state => state.ticket.fetchingState.loadTickets)
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
      stadium: "",
      team: "",
      ticket: "",
      date: "",

    },
    validationSchema: cricketSchema,
    onSubmit,
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align='stretch'>
          {loader && <Text>loading...</Text> }
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

        <FormControl isInvalid={touched.stadium && errors.stadium}>
          <FormLabel> Stadium </FormLabel>
          <Input
            required
            name="stadium"
            value={values.stadium}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
          />
          {touched.stadium && errors.stadium && (
            <Text color="red.500" fontSize="sm">
              {errors.stadium}
            </Text>
          )}
        </FormControl>

        <FormControl isInvalid={touched.team && errors.team}>
          <FormLabel>  Team</FormLabel>
          <Input
            required
            name="team"
            value={values.team}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
          />
          {touched.team && errors.team && (
            <Text color="red.500" fontSize="sm">
              {errors.team}
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
    </div >
  )
}

export default Cricket
