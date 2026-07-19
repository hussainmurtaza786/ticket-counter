import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Icon,
  Image,
  Input,

  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { contactSchema } from "../../Schemas/Index";
import { useFormik } from "formik";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from "react-icons/fa";

const contactInfo = [
  { icon: FaMapMarkerAlt, title: "Our Office", detail: "123 Business Avenue, Suite 400, New York, NY 10001" },
  { icon: FaPhoneAlt, title: "Phone", detail: "+1 (555) 123-4567" },
  { icon: FaEnvelope, title: "Email", detail: "support@ticketcounter.com" },
  { icon: FaClock, title: "Hours", detail: "Mon – Fri: 9:00 AM – 6:00 PM" },
];

function Contact() {
  const toast = useToast();

  const onSubmit = (values, { resetForm }) => {
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    resetForm();
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: { name: "", email: "", subject: "", message: "" },
    validationSchema: contactSchema,
    onSubmit,
  });

  return (
    <Box>
      {/* Hero */}
      <Box bg="gray.900" position="relative" overflow="hidden">
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bgGradient="linear(to-r, teal.600, blue.600)"
          opacity={0.15}
        />
        <Container maxW="1200px" position="relative" textAlign="center" py={{ base: 16, md: 24 }}>
          <VStack spacing={4}>
            <Text
              color="teal.300"
              fontWeight="semibold"
              fontSize="sm"
              letterSpacing="2px"
              textTransform="uppercase"
            >
              Get in Touch
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="extrabold"
              color="white"
              lineHeight="1.1"
            >
              We'd love to hear from you
            </Heading>
            <Text color="gray.400" fontSize={{ base: "md", md: "lg" }} maxW="600px" lineHeight="1.7">
              Have a question, partnership idea, or just want to say hello? Our team is ready to help.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxW="1200px" py={{ base: 16, md: 24 }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1.2fr 1fr" }}
          gap={{ base: 12, lg: 20 }}
          alignItems="start"
        >
          {/* Form */}
          <Box as="form" onSubmit={handleSubmit}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="bold" color="gray.800">
                Send us a message
              </Heading>
              <Text color="gray.500" fontSize="sm">
                Fill out the form below and we'll respond within 24 hours.
              </Text>

              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                <FormControl isInvalid={touched.name && errors.name}>
                  <FormLabel fontSize="sm" color="gray.600">Full Name</FormLabel>
                  <Input
                    name="name"
                    placeholder="John Doe"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    focusBorderColor="teal.500"
                  />
                  {touched.name && errors.name && (
                    <Text color="red.500" fontSize="xs" mt={1}>{errors.name}</Text>
                  )}
                </FormControl>

                <FormControl isInvalid={touched.email && errors.email}>
                  <FormLabel fontSize="sm" color="gray.600">Email Address</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    focusBorderColor="teal.500"
                  />
                  {touched.email && errors.email && (
                    <Text color="red.500" fontSize="xs" mt={1}>{errors.email}</Text>
                  )}
                </FormControl>
              </Grid>

              <FormControl isInvalid={touched.subject && errors.subject}>
                <FormLabel fontSize="sm" color="gray.600">Subject</FormLabel>
                <Input
                  name="subject"
                  placeholder="How can we help?"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  focusBorderColor="teal.500"
                />
                {touched.subject && errors.subject && (
                  <Text color="red.500" fontSize="xs" mt={1}>{errors.subject}</Text>
                )}
              </FormControl>

              <FormControl isInvalid={touched.message && errors.message}>
                <FormLabel fontSize="sm" color="gray.600">Message</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  focusBorderColor="teal.500"
                />
                {touched.message && errors.message && (
                  <Text color="red.500" fontSize="xs" mt={1}>{errors.message}</Text>
                )}
              </FormControl>

              <Button
                type="submit"
                colorScheme="teal"
                size="lg"
                fontSize="sm"
                fontWeight="semibold"
                rightIcon={<Icon as={FaPaperPlane} />}
                px={8}
                alignSelf="start"
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                transition="all 0.2s"
              >
                Send Message
              </Button>
            </VStack>
          </Box>

          {/* Contact Info */}
          <VStack spacing={8} align="stretch">
            <Box
              bg="teal.50"
              borderRadius="xl"
              p={8}
              border="1px"
              borderColor="teal.100"
            >
              <Heading as="h3" fontSize="lg" fontWeight="bold" color="gray.800" mb={6}>
                Contact Information
              </Heading>
              <VStack spacing={6} align="stretch">
                {contactInfo.map((item) => (
                  <Flex key={item.title} gap={4}>
                    <Flex
                      w={10}
                      h={10}
                      bg="teal.500"
                      borderRadius="lg"
                      align="center"
                      justify="center"
                      flexShrink={0}
                    >
                      <Icon as={item.icon} color="white" boxSize={4} />
                    </Flex>
                    <Box>
                      <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                        {item.title}
                      </Text>
                      <Text fontSize="sm" color="gray.500">
                        {item.detail}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </VStack>
            </Box>

            <Box
              borderRadius="xl"
              overflow="hidden"
              border="1px"
              borderColor="gray.200"
              h="200px"
            >
              <Image
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f18cd07?w=600&h=300&fit=crop"
                alt="Map"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>

            <Box bg="gray.50" borderRadius="xl" p={6} textAlign="center" border="1px" borderColor="gray.100">
              <Text fontSize="sm" color="gray.500" mb={1}>
                Looking for partnership opportunities?
              </Text>
              <Text fontSize="sm" fontWeight="semibold" color="teal.600">
                partnerships@ticketcounter.com
              </Text>
            </Box>
          </VStack>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
