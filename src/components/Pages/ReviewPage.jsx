import { Box, Flex, Text, VStack, Divider, Input, Button, Stack, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { StarIcon } from "@chakra-ui/icons";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([
    {
      email: "hussainmurtaza5222@gmail.com",
      text: "This was my best experience using the flight package from Ticket Counter. The service was superb!",
      rating: 5,
    },
    {
      email: "burhanhozefa113@gmail.com",
      text: "Great deals and seamless booking process—love it!",
      rating: 5,
    },
  ]);

  const [form, setForm] = useState({
    email: "",
    text: "",
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setForm((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews((prev) => [...prev, form]);
    setForm({ email: "", text: "", rating: 0 });
  };

  return (
    <Box p="4" bg="gray.100" minH="100vh" userSelect='none' backgroundColor='#f5f5f5'>
      <Flex direction="column" align="center">
        <VStack spacing="6" width={{ base: "90%", md: "70%" }} mb="8">
          <Text fontSize="2xl" fontWeight="bold" color="teal.600">
            Customer Reviews
          </Text>
          <Divider />

          {reviews.map((rev, index) => (
            <Box
              key={index}
              bg="white"
              border="1px solid #e2e8f0"
              borderRadius="md"
              boxShadow="lg"
              p="6"
              width="100%"
            >
              <Text fontWeight="bold" mb="2" fontSize="lg" color="teal.700">
                {rev.email}
              </Text>
              <Text mb="2" fontSize="md" color="gray.600">
                {rev.text}
              </Text>
              <Flex>
                {Array(5).fill("").map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < rev.rating ? "yellow.400" : "gray.300"}
                    boxSize="5"
                  />
                ))}
              </Flex>
            </Box>
          ))}
        </VStack>

        <Box
          bg="white"
          border="1px solid #e2e8f0"
          borderRadius="md"
          boxShadow="lg"
          p="6"
          width={{ base: "90%", md: "70%" }}
        >
          <Text fontSize="xl" fontWeight="bold" color="teal.600" mb="4">
            Leave a Review
          </Text>
          <Stack spacing="4">
            <Input
              placeholder="Your email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              borderColor="gray.300"
              focusBorderColor="teal.500"
            />
            <Input
              placeholder="Your review"
              name="text"
              value={form.text}
              onChange={handleInputChange}
              borderColor="gray.300"
              focusBorderColor="teal.500"
            />
            <Stack direction="row" spacing="4">
              {Array(5).fill("").map((_, i) => (
                <IconButton
                  key={i}
                  aria-label={`Rate ${i + 1} stars`}
                  icon={<StarIcon />}
                  color={i < form.rating ? "yellow.400" : "gray.300"}
                  onClick={() => handleRatingChange(i + 1)}
                />
              ))}
            </Stack>
            <Button colorScheme="teal" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default ReviewPage;
