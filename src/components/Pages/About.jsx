import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaTrophy, FaUsers, FaHandshake, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

const values = [
  {
    icon: FaUsers,
    title: "Customer First",
    desc: "Every decision we make starts with our customers. Your satisfaction drives everything we do.",
  },
  {
    icon: FaHandshake,
    title: "Trust & Security",
    desc: "We prioritize your privacy and security with industry-standard encryption and secure transactions.",
  },
  {
    icon: FaRocket,
    title: "Innovation",
    desc: "Constantly evolving our platform to deliver the fastest, most seamless booking experience.",
  },
  {
    icon: FaTrophy,
    title: "Excellence",
    desc: "Committed to providing premium service with 24/7 support and the best ticket offerings.",
  },
];

const team = [
  { name: "Sarah Mitchell", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face" },
  { name: "James Chen", role: "CTO", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
  { name: "Emily Rodriguez", role: "Head of Operations", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face" },
  { name: "David Park", role: "Lead Engineer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
];

function About() {
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
        <Container maxW="1200px" position="relative">
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            py={{ base: 16, md: 24 }}
            gap={10}
          >
            <VStack align="start" spacing={6} flex="1">
              <Text
                color="teal.300"
                fontWeight="semibold"
                fontSize="sm"
                letterSpacing="2px"
                textTransform="uppercase"
              >
                About Us
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="extrabold"
                color="white"
                lineHeight="1.1"
              >
                We're on a mission to{" "}
                <Text as="span" bgGradient="linear(to-r, teal.300, blue.400)" bgClip="text">
                  simplify ticketing
                </Text>{" "}
                for everyone
              </Heading>
              <Text color="gray.400" fontSize={{ base: "md", md: "lg" }} lineHeight="1.7" maxW="600px">
                Founded in 2020, Ticket Counter has grown from a small startup to a trusted platform 
                serving thousands of customers worldwide. We connect people with the experiences 
                they love — from movies and sports to travel.
              </Text>
              <Link to="/contact">
                <Box
                  as="button"
                  bg="teal.500"
                  color="white"
                  fontWeight="semibold"
                  px={8}
                  py={3}
                  borderRadius="md"
                  fontSize="sm"
                  _hover={{ bg: "teal.600", transform: "translateY(-2px)", boxShadow: "lg" }}
                  transition="all 0.2s"
                >
                  Get in Touch
                </Box>
              </Link>
            </VStack>
            <Box
              flex="1"
              w="100%"
              h={{ base: "300px", md: "400px" }}
              borderRadius="xl"
              overflow="hidden"
              boxShadow="2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop"
                alt="Team collaboration"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Mission */}
      <Container maxW="1200px" py={{ base: 16, md: 24 }}>
        <VStack spacing={6} textAlign="center" maxW="800px" mx="auto">
          <Text
            color="teal.500"
            fontWeight="semibold"
            fontSize="sm"
            letterSpacing="2px"
            textTransform="uppercase"
          >
            Our Mission
          </Text>
          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
            Making ticket booking effortless and accessible
          </Heading>
          <Text color="gray.500" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
            We believe that booking tickets should be as enjoyable as the experience itself. 
            Our platform combines cutting-edge technology with a deep understanding of what 
            customers need — speed, security, and choice. Whether you're planning a movie 
            night, cheering at a stadium, or boarding a flight, we make it happen with just 
            a few clicks.
          </Text>
        </VStack>
      </Container>

      {/* Values */}
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
              Our Values
            </Text>
            <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} textAlign="center" fontWeight="bold">
              What drives us every day
            </Heading>
          </VStack>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={8}>
            {values.map((v) => (
              <Box
                key={v.title}
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
                  <Icon as={v.icon} boxSize={6} color="teal.500" />
                </Flex>
                <Heading as="h3" fontSize="lg" mb={2} fontWeight="semibold">
                  {v.title}
                </Heading>
                <Text color="gray.500" fontSize="sm" lineHeight="1.6">
                  {v.desc}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Stats */}
      <Container maxW="1200px" py={{ base: 16, md: 24 }}>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
          {[
            { label: "Tickets Sold", value: "50K+" },
            { label: "Active Users", value: "20K+" },
            { label: "Partner Venues", value: "500+" },
            { label: "Support Rating", value: "4.9/5" },
          ].map((s) => (
            <VStack key={s.label} spacing={2}>
              <Heading fontSize={{ base: "3xl", md: "5xl" }} color="teal.500" fontWeight="extrabold">
                {s.value}
              </Heading>
              <Text color="gray.500" fontSize="sm" fontWeight="medium" textTransform="uppercase" letterSpacing="1px">
                {s.label}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>

      {/* Team */}
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
              Our Team
            </Text>
            <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} textAlign="center" fontWeight="bold">
              Meet the people behind Ticket Counter
            </Heading>
          </VStack>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={8}>
            {team.map((member) => (
              <VStack key={member.name} spacing={3}>
                <Box
                  w="160px"
                  h="160px"
                  borderRadius="full"
                  overflow="hidden"
                  border="4px"
                  borderColor="teal.100"
                >
                  <Image src={member.img} alt={member.name} w="100%" h="100%" objectFit="cover" />
                </Box>
                <Heading as="h4" fontSize="lg" fontWeight="semibold">{member.name}</Heading>
                <Text color="gray.500" fontSize="sm">{member.role}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA */}
      <Box bg="teal.600">
        <Container maxW="1200px" py={{ base: 16, md: 20 }}>
          <VStack spacing={6} textAlign="center">
            <Heading as="h2" fontSize={{ base: "2xl", md: "4xl" }} color="white" fontWeight="bold">
              Want to know more?
            </Heading>
            <Text color="teal.100" fontSize={{ base: "md", md: "lg" }} maxW="600px">
              We'd love to hear from you. Reach out to our team for partnerships, support, or just to say hello.
            </Text>
            <Link to="/contact">
              <Box
                as="button"
                bg="white"
                color="teal.600"
                fontWeight="bold"
                px={10}
                py={3}
                borderRadius="md"
                fontSize="md"
                _hover={{ bg: "gray.100", transform: "translateY(-2px)", boxShadow: "xl" }}
                transition="all 0.2s"
              >
                Contact Us
              </Box>
            </Link>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
