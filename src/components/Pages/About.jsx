import {
  Box,
  Text,
  Heading,
  Image,
  Divider,
  Flex,
} from "@chakra-ui/react";
import React from "react";

function About() {
  return (
    <Box
      userSelect="none"
      position="relative"
      height="100vh"
      overflow="hidden"
    >
      <Image
        src="https://img.freepik.com/premium-photo/stylish-bearded-businessman-formal-business-suit-standing-working-with-tablet-hands-background-modern-office-building-outside-man-using-smartphone-uses-mobile-phone-outdoors-city-street_321831-6806.jpg"
        alt="About Us"
        objectFit="cover"
        height="100%"
        width="100%"
        filter="brightness(35%)"
      />
      <Flex
        direction="column"
        align="center"
        justify="flex-start"
        position="absolute"
        top="0%"
        left="50%"
        transform="translate(-50%, 0)"
        textAlign="center"
        color="white"
        p={4}
        width={{ base: "100%", md: "60%" }}
        height="100%" // Set a fixed height for the Flex container
        overflowY="auto" // Enable vertical scrolling
      >
        <Heading color="teal.400" mb={4} fontSize={{ base: "xl", md: "2xl" }}>
          About Us
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800" mb={4}>
          Welcome to Ticket Counter, the ultimate destination for all your ticketing needs. We offer a wide range of tickets for movies, sports events (including cricket, tennis, football), flights, and more, all in one convenient platform. Our mission is to make ticket purchasing easy, fast, and secure, with the best offers for our users.
        </Text>
        <Divider borderColor="gray.600" my={4} />
        <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800" mb={4}>
          At Ticket Counter, we believe in providing our customers with the best possible experience. Our user-friendly interface, secure payment options, and 24/7 customer support ensure that you can book your tickets with confidence and ease.
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800" mb={4}>
          Whether you're planning a journey, booking a movie night, or catching your favorite sports event, we've got you covered. Join us today and discover a seamless ticket booking experience with the best offers just for you!
        </Text>
        <Divider borderColor="gray.600" my={4} />
        <Heading color="teal.400" mb={4} fontSize={{ base: "xl", md: "2xl" }}>
          Our Future Plans
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800" mb={4}>
          We’re constantly working on expanding our services and enhancing your experience. Our future plans include:
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800" mt={2}>
          - Introducing new ticket categories and exclusive offers.
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800" mt={2}>
          - Enhancing our platform with advanced features for a more seamless booking process.
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800" mt={2}>
          - Expanding our network to include more events and destinations.
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800" mt={2}>
          - Improving our customer support to provide you with faster and more personalized assistance.
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800" mt={2}>
          Stay tuned for more exciting updates as we continue to innovate and bring you the best ticketing experience possible!
        </Text>
      </Flex>
    </Box>
  );
}

export default About;
