import { Box, Container, Flex, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { StarIcon } from "@chakra-ui/icons";
import { FaQuoteLeft } from "react-icons/fa";

const reviews = [
  { name: "Hussain M.", text: "This was my best experience using the flight package from Ticket Counter. The service was superb!", rating: 5 },
  { name: "Burhan H.", text: "Great deals and seamless booking process — love it!", rating: 5 },
  { name: "Aisha K.", text: "Booked cricket match tickets in seconds. The whole process was effortless.", rating: 5 },
  { name: "Rahul S.", text: "Best platform for movie tickets. Great prices and instant confirmation.", rating: 4 },
  { name: "Maria G.", text: "Customer support helped me rebook within minutes. Highly recommended.", rating: 5 },
  { name: "Omar F.", text: "From flights to sports — everything in one place. A game changer!", rating: 5 },
];

function ReviewsCarousel() {
  const [offset, setOffset] = useState(0);
  const cardWidth = 340;
  const gap = 24;
  const step = cardWidth + gap;
  const totalWidth = step * reviews.length;
  const cloneWidth = step * 3;
  const trackRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const next = prev - 0.5;
        if (next <= -(totalWidth + cloneWidth)) {
          return -cloneWidth;
        }
        return next;
      });
    }, 16);
    return () => clearInterval(interval);
  }, [totalWidth, cloneWidth]);

  const allCards = [...reviews, ...reviews.slice(0, 3)];

  return (
    <Box bg="gray.50" py={{ base: 16, md: 24 }} overflow="hidden">
      <Container maxW="1200px">
        <VStack spacing={4} mb={{ base: 12, md: 16 }}>
          <Text
            color="teal.500"
            fontWeight="semibold"
            fontSize="sm"
            letterSpacing="2px"
            textTransform="uppercase"
          >
            Testimonials
          </Text>
          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} textAlign="center" fontWeight="bold">
            What our customers say
          </Heading>
        </VStack>
      </Container>

      <Box
        ref={trackRef}
        as="div"
        css={{
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <Flex
          gap={`${gap}px`}
          style={{
            transform: `translateX(${offset}px)`,
            width: `${(allCards.length) * step}px`,
          }}
          transition="none"
        >
          {allCards.map((rev, i) => (
            <Box
              key={i}
              flex={`0 0 ${cardWidth}px`}
              bg="white"
              borderRadius="xl"
              p={6}
              border="1px"
              borderColor="gray.100"
              boxShadow="sm"
              h="200px"
              display="flex"
              flexDirection="column"
            >
              <Icon as={FaQuoteLeft} color="teal.200" boxSize={5} mb={3} />
              <Text color="gray.600" fontSize="sm" lineHeight="1.6" flex="1" noOfLines={4}>
                {rev.text}
              </Text>
              <Flex justify="space-between" align="center" mt={3}>
                <Text fontWeight="semibold" fontSize="sm" color="gray.800">
                  {rev.name}
                </Text>
                <Flex>
                  {Array(5).fill("").map((_, i) => (
                    <StarIcon key={i} boxSize={3} color={i < rev.rating ? "yellow.400" : "gray.200"} />
                  ))}
                </Flex>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default ReviewsCarousel;
