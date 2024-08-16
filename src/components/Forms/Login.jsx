import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  CloseButton,
} from '@chakra-ui/react';

const Login = ({onClose,onLogin}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Box
        bg={useColorModeValue('white', 'gray.700')}
        p={8}
        maxWidth="400px"
        borderRadius="lg"
        boxShadow="lg"
      >
<CloseButton onClick={() => onClose(false)} fontSize='20px' color='red'>X</CloseButton>

        <Stack spacing={4}>
          <Heading fontSize="2xl" textAlign="center">
            Welcome Back
          </Heading>
          <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')}>
            Please enter your name and email to log in
          </Text>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Your Name" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="your@example.com" />
          </FormControl>
          <Button
            colorScheme="teal"
            variant="solid"
            size="lg"
            mt={4}
            type='submit'
            onClick={onLogin}
          >
            Log In
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login
