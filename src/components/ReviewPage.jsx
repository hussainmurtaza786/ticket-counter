import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Review from "./Forms/Review";
import { StarIcon } from "@chakra-ui/icons";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([
    {
      email: "hussainmurtaza@gmail.com",
      text: "This was my best experience using the flight package from Ticket Counter. The service was superb!",
      rating: 5,
    },
    {
      email: "murtaza133@gmail.com",
      text: "Great deals and seamless booking process—love it!",
      rating: 4,
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
    <Box>
      <Flex direction="column" align="center" m="2rem 8px">
        {reviews.map((rev, index) => (
          <Box
            key={index}
            bgColor="#f2f2f2"
            border="1px solid red"
            borderRadius="8px"
            boxShadow="md"
            p="20px"
            height="auto"
            width={{ base: "90%", md: "33%" }}
            mb={{ base: "1rem", md: "0" }}
          >
            <Box>
              <Text fontWeight="bold"> {rev.email} </Text>
            </Box>
            <Text> {rev.text} </Text>
            <Flex>
              {Array(5).fill("").map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < rev.rating ? "yellow.500" : "gray.300"}
                />
              ))}
            </Flex>
          </Box>
        ))}

        <Box
          bgColor="#f2f2f2"
          border="1px solid red"
          borderRadius="8px"
          boxShadow="md"
          p="20px"
          width={{ base: "90%", md: "50%" }}
          mt="2rem"
        >
          <Review
            email={form.email}
            text={form.text}
            rating={form.rating}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            handleRatingChange={handleRatingChange}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ReviewPage;
