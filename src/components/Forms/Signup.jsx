import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, } from '@chakra-ui/react';

const Signup = ({ isSignin, onClose }) => {


  const handleSubmit = (event) => {
    event.preventDefault();
    isSignin(true)
    onClose(false)

  };

  return (
    <Box display='flex'  justifyContent='center' alignItems='center'    p={6}  borderRadius="md" >
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input type="text" placeholder="Enter your username" />
          </FormControl>

          <FormControl id="age" isRequired>
            <FormLabel>Age</FormLabel>
            <Input type="number" placeholder="Enter your age" />
          </FormControl>

          <FormControl id="phone" isRequired>
            <FormLabel>Phone</FormLabel>
            <Input type="tel" placeholder="Enter your phone number" />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>

          <Button type="submit" colorScheme="blue" mt={4}>
            Sign Up
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Signup;
