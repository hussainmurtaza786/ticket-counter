import { Box, Flex, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Review = () => {
  return (
    <Box    >
      <Flex justify='center' m='3rem 0rem'>
        <Box
          bgColor='#f2f2f2'
          // m='0px 30px'
          border='1px solid red'
          borderRadius='8px'
          boxShadow='md'
          p='20px'
          height='30vh'
          width='33%'
        >
          <Text>hussainmur...@gmail.com</Text>
          <Text mb='10px'>
            This was my best experience using the flight package from Ticket Counter. The service was superb!
          </Text>
          <Flex>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon key={i} color='yellow.500' />
              ))}
          </Flex>
        </Box>
        <Box
          bgColor='#f2f2f2'
          m='0px 30px'
          border='1px solid red'
          borderRadius='8px'
          boxShadow='md'
          p='20px'
          height='30vh'
          width='33%'
        >
          <Text>murtaza1...@gmail.com</Text>
          <Text mb='10px'>
          "Great deals and seamless booking process—love it!"
          </Text>
          <Flex>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon key={i} color='yellow.500' />
              ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Review;
