import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { loginFormSchema } from "../../Schemas/Index";
import { useDispatch } from "react-redux";
import { sendLoginData } from "../../store/login-action";

const Login = ({ onClose, onLogin }) => {
  const dispatch = useDispatch()
  const onSubmit = (values) => {
    dispatch(sendLoginData(values))
    onLogin(true);
    onClose(false);
    console.log("Form Submitted", values);
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
      },
      validationSchema: loginFormSchema,
      onSubmit,
    });

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box
        bg={useColorModeValue("white", "gray.700")}
        p={8}
        maxWidth="400px"
        borderRadius="lg"
        boxShadow="lg"
      >
        <Stack spacing={4}>
          <Heading fontSize="2xl" textAlign="center">
            Welcome Back
          </Heading>
          <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.300")}>
            Please enter your name and email to log in
          </Text>
          <FormControl id="name" isInvalid={touched.name && errors.name}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
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
          <Button
            colorScheme="teal"
            variant="solid"
            size="lg"
            mt={4}
            type="submit"
          >
            Log In
          </Button>
        </Stack>
      </Box>
    </form>
  );
};

export default Login;
