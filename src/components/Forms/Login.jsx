import React from "react";
import { Box, Button, FormControl, FormLabel, Input, Stack, Heading, Text, useColorModeValue, } from "@chakra-ui/react";
import { useFormik } from "formik";
import { loginFormSchema } from "../../Schemas/Index";
import { useDispatch, useSelector } from "react-redux";
import { signInThunk } from "../../store/authSlice";

const Login = ({ onClose }) => {
  const dispatch = useDispatch()
  const error = useSelector(state => state.auth.error)
  // console.log("error ==>", error)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const onSubmit = async (values) => {
    try {
      await dispatch(signInThunk(values)).unwrap(); 
      if (isAuthenticated) {
        onClose();
      } else {
        alert("Authentication failed"); 
      }
    } catch (error) {
      alert(error.message || "An error occurred during login"); 
    }
    console.log('Values ==>', values);
  };
  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        password: "",
        email: "",
      },
      validationSchema: loginFormSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", justifyContent: "center", }} >
      <Box p={8} maxWidth="400px" borderRadius="lg" >

        <Stack spacing={4}>
          <Heading fontSize="2xl" textAlign="center"> Welcome Back </Heading>
          <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.300")}> Please enter your name and email to log in </Text>

          <FormControl id="email" isInvalid={touched.email && errors.email}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" name="email" placeholder="your@example.com" value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {touched.email && errors.email && (
              <Text color="red.500" fontSize="sm">
                {errors.email}
              </Text>
            )}
          </FormControl>

          <FormControl id="password" isInvalid={touched.password && errors.password}>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" placeholder="Enter Password" value={values.password} onChange={handleChange} onBlur={handleBlur}
            />
            {touched.password && errors.password && (
              <Text color="red.500" fontSize="sm">
                {errors.password}
              </Text>
            )}
          </FormControl>

          <Button colorScheme="teal" variant="solid" size="lg" mt={4} type="submit">
            Log In
          </Button>
        </Stack>
      </Box>
    </form>
  );
};

export default Login;
