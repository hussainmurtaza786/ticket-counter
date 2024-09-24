import React, { useState } from "react";
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
  IconButton,
  InputRightElement,
  InputGroup,
  Spinner,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { loginFormSchema } from "../../Schemas/Index";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { signInThunk } from "../../store/authSlice";

const Login = ({ onClose }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isAuthenticating = useSelector((state) => state.auth.isAuthenticating);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    try {
      await dispatch(signInThunk(values)).unwrap();
      onClose();
    } catch (error) {
      alert(error);
    }
  };

  const { values, isValid, isSubmitting, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        password: "",
        email: "",
      },
      validationSchema: loginFormSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box p={6} maxWidth={{ base: "90%", sm: "400px" }} borderRadius="lg">
        {isAuthenticating && <Spinner />}
        <Stack spacing={4}>
          <Heading fontSize="2xl" textAlign="center">
            Welcome Back
          </Heading>
          <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.300")}>
            Please enter your email and password to log in
          </Text>

          <FormControl id="email" isInvalid={touched.email && errors.email}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="your@example.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              width="100%" // Full width
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
                type={isPasswordVisible ? "text" : "password"}
                width="100%" // Full width
              />
              <InputRightElement>
                <IconButton
                  aria-label={isPasswordVisible ? "Hide password" : "Show password"}
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
            aria-disabled={!isValid || isSubmitting}
            disabled={!isValid || isSubmitting}
            size={{ base: "md", sm: "lg" }} // Responsive button size
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </form>
  );
};

export default Login;
