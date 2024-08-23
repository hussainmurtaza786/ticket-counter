import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Text, } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpThunk } from '../../store/authSlice';
import { useFormik } from 'formik';
import { signupFormSchema } from '../../Schemas/Index'

const Signup = ({ signup, onClose }) => {

  const dispatch = useDispatch()



  const onSubmit = (values) => {
    dispatch(signUpThunk(values));
    signup = true;
    onClose();
    // console.error("Signup Error:", error.message);


  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        age: "",
        phone: "",
        email: "",
        password: "",
      },
      validationSchema: signupFormSchema,
      onSubmit,
    });

  return (
    <Box display='flex' justifyContent='center' alignItems='center' p={6} borderRadius="md" >

      <form onSubmit={handleSubmit}>

        <Stack spacing={4}>

          <FormControl id="username" isInvalid={touched.username && errors.username}  >
            <FormLabel>Username</FormLabel>
            <Input type="text" placeholder="Enter your User Name" value={values.username} onChange={handleChange} onBlur={handleBlur} />
            {touched.username && errors.username && (
              <Text color="red.500" fontSize="sm">
                {errors.username}
              </Text>
            )}
          </FormControl>

          <FormControl id="age" isInvalid={touched.age && errors.age}  >
            <FormLabel>Age</FormLabel>
            <Input type="number" placeholder="Enter your age" value={values.age} onChange={handleChange} onBlur={handleBlur} />
            {touched.age && errors.age && (
              <Text color="red.500" fontSize="sm">
                {errors.age}
              </Text>
            )}
          </FormControl>

          <FormControl id="phone" isInvalid={touched.phone && errors.phone} >
            <FormLabel>Phone</FormLabel>
            <Input type="tel" placeholder="Enter your phone number" value={values.phone} onChange={handleChange} onBlur={handleBlur} />
            {touched.phone && errors.phone && (
              <Text color="red.500" fontSize="sm">
                {errors.phone}
              </Text>
            )}
          </FormControl>

          <FormControl id="email" isInvalid={touched.email && errors.email}>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {touched.email && errors.email && (
              <Text color="red.500" fontSize="sm">
                {errors.email}
              </Text>
            )}
          </FormControl>

          <FormControl id="password" isInvalid={touched.password && errors.password} >
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
            {touched.password && errors.password && (
              <Text color="red.500" fontSize="sm">
                {errors.password}
              </Text>
            )}
          </FormControl>

          <Button type="submit" colorScheme="blue" mt={4}>
            Sign Up
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Signup;
