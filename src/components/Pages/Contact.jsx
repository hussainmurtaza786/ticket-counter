import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { contactSchema } from "../../Schemas/Index";
import { useFormik } from "formik";

function Contact() {
  const onSubmit = (values) => {
    // Handle form submission here
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit,
  });

  return (
    <Box backgroundColor="#1a1a1a" width="100%">
      <Box position="relative" height="100vh" width="100%">
        <Image
          src="https://media.istockphoto.com/id/1434116614/photo/teamwork-diversity-and-sales-manager-planning-branding-ideas-with-a-creative-designer-on-a.jpg?s=612x612&w=0&k=20&c=0qDHz0EDKEgxqcRP7V-YWaGv9nrjKDXG5lz8svrlbcQ="
          objectFit="cover"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          opacity={0.3}
        />
        <Box
          position="absolute"
          top={{ base: "6rem", md: "10rem" }} // Responsive top positioning
          left={{ base: "5%", md: "30rem" }} // Responsive left positioning
          right={{ base: "5%", md: "unset" }} // Ensure it doesn't go off-screen on small devices
          m="12px 0"
          maxW={{ base: "90%", md: "600px" }} // Responsive max width
          mx="auto"
          p="6"
          userSelect="none"
          mt="8"
          borderRadius="md"
          border="none"
          color="white"
        >
          <Heading as="h1" size="lg" mb="6" textAlign="center" color="teal.500">
            Contact Us
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing="4">
              <FormControl isInvalid={touched.name && errors.name}>
                <FormLabel>Name</FormLabel>
                <Input
                  border="none"
                  borderBottom="1px solid grey"
                  required
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  _focus={{ boxShadow: "none", borderColor: "transparent" }} // Remove blue focus border
                />
                {touched.name && errors.name && (
                  <Text color="red.500" fontSize="sm">
                    {errors.name}
                  </Text>
                )}
              </FormControl>

              <FormControl isInvalid={touched.email && errors.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  border="none"
                  borderBottom="1px solid grey"
                  required
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  _focus={{ boxShadow: "none", borderColor: "transparent" }} // Remove blue focus border
                />
                {touched.email && errors.email && (
                  <Text color="red.500" fontSize="sm">
                    {errors.email}
                  </Text>
                )}
              </FormControl>

              <FormControl isInvalid={touched.subject && errors.subject}>
                <FormLabel>Subject</FormLabel>
                <Input
                  border="none"
                  borderBottom="1px solid grey"
                  required
                  type="text"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  _focus={{ boxShadow: "none", borderColor: "transparent" }} // Remove blue focus border
                />
                {touched.subject && errors.subject && (
                  <Text color="red.500" fontSize="sm">
                    {errors.subject}
                  </Text>
                )}
              </FormControl>

              <FormControl isInvalid={touched.message && errors.message}>
                <FormLabel>Message</FormLabel>
                <Input
                  border="none"
                  borderBottom="1px solid grey"
                  required
                  type="text"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  _focus={{ boxShadow: "none", borderColor: "transparent" }} // Remove blue focus border
                />
                {touched.message && errors.message && (
                  <Text color="red.500" fontSize="sm">
                    {errors.message}
                  </Text>
                )}
              </FormControl>

              <Button colorScheme="teal" width="full" type="submit" mt="4">
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
