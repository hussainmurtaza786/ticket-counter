import { Box, Button, Container, Flex, Grid, Heading, Icon, Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import background from "../../background.png";
import { Link } from "react-router-dom";
import { FaFilm, FaPlane, FaFutbol, FaShieldAlt, FaHeadset, FaBolt } from "react-icons/fa";
import ReviewsCarousel from "./ReviewsCarousel";

const features = [
  { icon: FaFilm, title: "Movie Tickets", desc: "Latest blockbusters at the best prices, curated just for you." },
  { icon: FaFutbol, title: "Sports Events", desc: "Cricket, football, tennis — catch every thrilling match live." },
  { icon: FaPlane, title: "Travel Bookings", desc: "Flights, trains, and buses for your next journey." },
  { icon: FaBolt, title: "Instant Booking", desc: "Secure your tickets in seconds with our streamlined process." },
  { icon: FaShieldAlt, title: "Secure Payments", desc: "Your transactions are protected with enterprise-grade security." },
  { icon: FaHeadset, title: "24/7 Support", desc: "Our team is here around the clock to help you." },
];

const stats = [
  { label: "Tickets Sold", value: "50K+" },
  { label: "Happy Customers", value: "20K+" },
  { label: "Events Covered", value: "500+" },
  { label: "Cities Served", value: "100+" },
];

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box position="relative" height={{ base: "90vh", md: "100vh" }} overflow="hidden">
        <Image
          src={background}
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          objectFit="cover"
          filter="brightness(0.3)"
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bgGradient="linear(to-b, rgba(0,0,0,0.6), rgba(0,0,0,0.3))"
        />
        <Flex
          position="relative"
          direction="column"
          align="center"
          justify="center"
          h="100%"
          px={4}
          textAlign="center"
        >
          <VStack spacing={6} maxW="800px">
            <Text
              color="teal.300"
              fontWeight="semibold"
              fontSize={{ base: "sm", md: "md" }}
              letterSpacing="3px"
              textTransform="uppercase"
            >
              Your Premium Ticketing Partner
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
              fontWeight="extrabold"
              color="white"
              lineHeight="1.1"
            >
              Book Tickets for{" "}
              <Text as="span" bgGradient="linear(to-r, teal.300, blue.400)" bgClip="text">
                Movies, Sports & Travel
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.300"
              maxW="600px"
              lineHeight="1.7"
            >
              Experience the fastest and most secure way to book tickets. 
              From blockbuster movies to live sports and travel — we've got you covered.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4} pt={2}>
              <Link to="/ticket">
                <Button
                  size="lg"
                  colorScheme="teal"
                  px={8}
                  py={6}
                  fontSize="md"
                  fontWeight="bold"
                  _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
                  transition="all 0.2s"
                >
                  Browse Tickets
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  colorScheme="white"
                  px={8}
                  py={6}
                  fontSize="md"
                  fontWeight="bold"
                  borderColor="whiteAlpha.500"
                  color="white"
                  _hover={{ bg: "whiteAlpha.100", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  Learn More
                </Button>
              </Link>
            </Stack>
          </VStack>
        </Flex>
      </Box>

      {/* Stats Section */}
      <Box bg="white" borderTop="1px" borderColor="gray.100">
        <Container maxW="1200px" py={{ base: 10, md: 14 }}>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
            {stats.map((stat) => (
              <VStack key={stat.label} spacing={1}>
                <Heading fontSize={{ base: "3xl", md: "4xl" }} color="teal.500" fontWeight="extrabold">
                  {stat.value}
                </Heading>
                <Text color="gray.500" fontSize="sm" fontWeight="medium" textTransform="uppercase" letterSpacing="1px">
                  {stat.label}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box bg="gray.50">
        <Container maxW="1200px" py={{ base: 16, md: 24 }}>
          <VStack spacing={4} mb={{ base: 12, md: 16 }}>
            <Text
              color="teal.500"
              fontWeight="semibold"
              fontSize="sm"
              letterSpacing="2px"
              textTransform="uppercase"
            >
              Why Choose Us
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              textAlign="center"
              fontWeight="bold"
            >
              Everything you need for seamless ticketing
            </Heading>
            <Text color="gray.500" textAlign="center" maxW="600px">
              We bring together the best entertainment and travel options in one place.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
            {features.map((feature) => (
              <Box
                key={feature.title}
                bg="white"
                p={8}
                borderRadius="xl"
                border="1px"
                borderColor="gray.100"
                transition="all 0.3s"
                _hover={{ transform: "translateY(-4px)", boxShadow: "lg", borderColor: "teal.200" }}
              >
                <Flex
                  w={12}
                  h={12}
                  bg="teal.50"
                  borderRadius="lg"
                  align="center"
                  justify="center"
                  mb={4}
                >
                  <Icon as={feature.icon} boxSize={6} color="teal.500" />
                </Flex>
                <Heading as="h3" fontSize="lg" mb={2} fontWeight="semibold">
                  {feature.title}
                </Heading>
                <Text color="gray.500" fontSize="sm" lineHeight="1.6">
                  {feature.desc}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <ReviewsCarousel />

      {/* CTA Section */}
      <Box bg="teal.600">
        <Container maxW="1200px" py={{ base: 16, md: 24 }}>
          <VStack spacing={6} textAlign="center">
            <Heading as="h2" fontSize={{ base: "2xl", md: "4xl" }} color="white" fontWeight="bold">
              Ready to book your next experience?
            </Heading>
            <Text color="teal.100" fontSize={{ base: "md", md: "lg" }} maxW="600px">
              Join thousands of happy customers. Start booking your tickets in minutes.
            </Text>
            <Link to="/ticket">
              <Button
                size="lg"
                bg="white"
                color="teal.600"
                px={10}
                py={6}
                fontSize="md"
                fontWeight="bold"
                _hover={{ bg: "gray.100", transform: "translateY(-2px)", boxShadow: "xl" }}
                transition="all 0.2s"
              >
                Get Started Now
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="gray.400">
        <Container maxW="1200px" py={10}>
          <Grid
            templateColumns={{ base: "1fr", md: "2fr 1fr 1fr 1fr" }}
            gap={8}
          >
            <Box>
              <Heading as="h4" fontSize="lg" color="white" mb={4}>
                Ticket Counter
              </Heading>
              <Text fontSize="sm" lineHeight="1.7">
                Your trusted platform for booking movie, sports, and travel tickets. 
                Fast, secure, and reliable.
              </Text>
            </Box>
            <Box>
              <Heading as="h4" fontSize="sm" color="white" mb={4} textTransform="uppercase" letterSpacing="1px">
                Quick Links
              </Heading>
              <VStack align="start" spacing={2}>
                <Link to="/ticket"><Text fontSize="sm" _hover={{ color: "white" }}>Tickets</Text></Link>
                <Link to="/about"><Text fontSize="sm" _hover={{ color: "white" }}>About</Text></Link>
                <Link to="/contact"><Text fontSize="sm" _hover={{ color: "white" }}>Contact</Text></Link>
                <Link to="/review"><Text fontSize="sm" _hover={{ color: "white" }}>Reviews</Text></Link>
              </VStack>
            </Box>
            <Box>
              <Heading as="h4" fontSize="sm" color="white" mb={4} textTransform="uppercase" letterSpacing="1px">
                Services
              </Heading>
              <VStack align="start" spacing={2}>
                <Text fontSize="sm" _hover={{ color: "white" }}>Movie Tickets</Text>
                <Text fontSize="sm" _hover={{ color: "white" }}>Sports Events</Text>
                <Text fontSize="sm" _hover={{ color: "white" }}>Flight Booking</Text>
                <Text fontSize="sm" _hover={{ color: "white" }}>Train & Bus</Text>
              </VStack>
            </Box>
            <Box>
              <Heading as="h4" fontSize="sm" color="white" mb={4} textTransform="uppercase" letterSpacing="1px">
                Contact
              </Heading>
              <VStack align="start" spacing={2}>
                <Text fontSize="sm">support@ticketcounter.com</Text>
                <Text fontSize="sm">+1 (555) 123-4567</Text>
                <Text fontSize="sm">24/7 Customer Support</Text>
              </VStack>
            </Box>
          </Grid>
          <Box borderTop="1px" borderColor="gray.700" mt={8} pt={8} textAlign="center">
            <Text fontSize="sm">&copy; {new Date().getFullYear()} Ticket Counter. All rights reserved.</Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
