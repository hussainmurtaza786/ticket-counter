import {
  Box,
  Text,
  Heading,
  Image,
  Divider,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

function About() {
  const textAlign = useBreakpointValue({ base: "center", md: "left" });

  return (
    <Box
    userSelect='none'
      backgroundColor="#1a1a1a"
      boxShadow="lg"
      borderRadius="md"
      overflow="hidden"
      position="relative"
    >
      <Flex direction={{ base: "column", md: "row" }} align="center">
        <Box flexShrink={0} width="100%">
          <Image
            src="https://img.freepik.com/premium-photo/stylish-bearded-businessman-formal-business-suit-standing-working-with-tablet-hands-background-modern-office-building-outside-man-using-smartphone-uses-mobile-phone-outdoors-city-street_321831-6806.jpg"
            alt="About Us"
            borderRadius="md"
            objectFit="cover"
            width="100%"
            filter="brightness(35%)"
          />
        </Box>
        <Box
          p="6"
          position="absolute"
          top="1rem"
          left={{ base: "0", md: "20%" }}
          transform={{ base: "translateY(-50%)", md: "none" }}
          color="white"
          maxWidth={{ base: "90%", md: "60%" }}
        >
          <Heading color="teal.400" mb="4" textAlign={textAlign}>
            About Us
          </Heading>
          <Text fontSize="lg" color="whiteAlpha.800" textAlign={textAlign}>
            Welcome to Ticket Counter, the ultimate destination for all your
            ticketing needs. We offer a wide range of tickets for movies, sports
            events (including cricket, tennis, football), flights, and more, all
            in one convenient platform. Our mission is to make ticket purchasing
            easy, fast, and secure, with the best offers for our users.
          </Text>
          <Divider borderColor="gray.600" my="4" />
          <Text fontSize="lg" color="whiteAlpha.800" textAlign={textAlign}>
            At Ticket Counter, we believe in providing our customers with the
            best possible experience. Our user-friendly interface, secure
            payment options, and 24/7 customer support ensure that you can book
            your tickets with confidence and ease.
          </Text>
          <Text fontSize="lg" color="whiteAlpha.800" textAlign={textAlign}>
            Whether you're planning a journey, booking a movie night, or
            catching your favorite sports event, we've got you covered. Join us
            today and discover a seamless ticket booking experience with the
            best offers just for you!
          </Text>
          <Divider borderColor="gray.600" my="4" />
          <Heading color="teal.400" mb="4" textAlign={textAlign}>
            Our Future Plans
          </Heading>
          <Text fontSize="lg" color="whiteAlpha.800" textAlign={textAlign}>
            We’re constantly working on expanding our services and enhancing
            your experience. Our future plans include:
          </Text>
          <Text
            fontSize="lg"
            color="whiteAlpha.800"
            textAlign={textAlign}
            mt="2"
          >
            - Introducing new ticket categories and exclusive offers.
          </Text>
          <Text
            fontSize="lg"
            color="whiteAlpha.800"
            textAlign={textAlign}
            mt="2"
          >
            - Enhancing our platform with advanced features for a more seamless
            booking process.
          </Text>
          <Text
            fontSize="lg"
            color="whiteAlpha.800"
            textAlign={textAlign}
            mt="2"
          >
            - Expanding our network to include more events and destinations.
          </Text>
          <Text
            fontSize="lg"
            color="whiteAlpha.800"
            textAlign={textAlign}
            mt="2"
          >
            - Improving our customer support to provide you with faster and more
            personalized assistance.
          </Text>
          <Text
            fontSize="lg"
            color="whiteAlpha.800"
            textAlign={textAlign}
            mt="2"
          >
            Stay tuned for more exciting updates as we continue to innovate and
            bring you the best ticketing experience possible!
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
