import React, { useState } from 'react'
import { Box, Button, Flex, Image, FormControl, FormLabel, Input, VStack, CloseButton } from '@chakra-ui/react'

function Flight({ onClose }) {
  const [cartIsShown, setCartIsShown] = useState(true)

  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <Box
      display='flex'
      flexDirection='column'
      width='500px'
      height='100%'
      bgColor='whitesmoke'
      p='20px'
      boxShadow='xl'
      borderRadius='md'
    >
      <CloseButton onClick={() => onClose(false)} fontSize='20px' color='red'>X</CloseButton>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        marginBottom='20px'
      >
        <label style={{ margin: '15px 8px', fontSize: '30px', fontWeight: 'bold' }}>
          Flight Ticket Form
        </label>
        <Image
          zIndex={1}
          src="https://i.pinimg.com/originals/b9/b8/1a/b9b81ab0e549a0ef6bbd9616e32031d5.gif"
          alt="Airplane"
        />
      </Box>
      <form>
        <VStack spacing={4} align='stretch'>
          <FormControl>
            <FormLabel>Departure Airport</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl>
            <FormLabel>Destination Airport</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl>
            <FormLabel>Departure Date</FormLabel>
            <Input type="date" />
          </FormControl>

          <FormControl>
            <FormLabel>Departure Time</FormLabel>
            <Input type='time' />
          </FormControl>

          <FormControl>
            <FormLabel>Return Date</FormLabel>
            <Input type="date" />
          </FormControl>

          <FormControl>
            <FormLabel>Return Time</FormLabel>
            <Input type='time' />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type='email' />
          </FormControl>

          <Flex justifyContent='space-between'>
            <FormControl width='48%'>
              <FormLabel>First Name</FormLabel>
              <Input type='text' />
            </FormControl>

            <FormControl width='48%'>
              <FormLabel>Last Name</FormLabel>
              <Input type='text' />
            </FormControl>
          </Flex>

          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input type='number' />
          </FormControl>

          <FormControl>
            <FormLabel>Number of Passengers</FormLabel>
            <Input type='number' />
          </FormControl>

          <Button mt={4} colorScheme='teal' type='submit'>Submit</Button>
        </VStack>
      </form>
    </Box>
  )
}

export default Flight
