import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpThunk } from '../../store/authSlice';
import { useFormik } from 'formik';
import { signupFormSchema } from '../../Schemas/Index';
import { IoEyeSharp } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa';

const Signup = ({ onClose }) => {
  const isAuthenticating = useSelector((state) => state.auth.isAuthenticating);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    try {
      await dispatch(signUpThunk(values)).unwrap();
      onClose();
    } catch (error) {
      alert(error.message);
    }
  };

  const { values, isValid, isSubmitting, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: '',
        age: '',
        phone: '',
        email: '',
        password: '',
      },
      validationSchema: signupFormSchema,
      onSubmit,
    });

  return (
    <Flex
      display='flex'
      justifyContent='center'
      alignItems='center'
      p={{ base: 4, md: 6 }} // Responsive padding
      borderRadius='md'
      height='100vh' // Fill the viewport height
    >
      <Box width={{ base: '90%', sm: '70%', md: '50%', lg: '40%' }} borderWidth={1} borderRadius='lg' p={6}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            {isAuthenticating && <Spinner />}

            <FormControl id="username" isInvalid={touched.username && errors.username}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                placeholder="Enter your User Name"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.username && errors.username && (
                <Text color="red.500" fontSize="sm">
                  {errors.username}
                </Text>
              )}
            </FormControl>

            <FormControl id="age" isInvalid={touched.age && errors.age}>
              <FormLabel>Age</FormLabel>
              <Input
                type="number"
                placeholder="Enter your age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.age && errors.age && (
                <Text color="red.500" fontSize="sm">
                  {errors.age}
                </Text>
              )}
            </FormControl>

            <FormControl id="phone" isInvalid={touched.phone && errors.phone}>
              <FormLabel>Phone</FormLabel>
              <Input
                type="tel"
                placeholder="Enter your phone number"
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

            <FormControl id="email" isInvalid={touched.email && errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
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

            <FormControl id="password" isInvalid={touched.password && errors.password}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  placeholder="Enter Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type={isPasswordVisible ? 'text' : 'password'}
                />
                <InputRightElement>
                  <IconButton
                    aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
                    icon={isPasswordVisible ? <IoEyeSharp /> : <FaRegEyeSlash />}
                    onClick={togglePasswordVisibility}
                    variant="ghost"
                    size="sm"
                  />
                </InputRightElement>
              </InputGroup>
              {touched.password && errors.password && (
                <Text color="red.500" fontSize="sm" mt={1}>
                  {errors.password}
                </Text>
              )}
            </FormControl>

            <Button
              spacing={4}
              mt={4}
              colorScheme="teal"
              type="submit"
              isLoading={isSubmitting} // Show spinner on submit
              isDisabled={!isValid || isSubmitting}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default Signup;
