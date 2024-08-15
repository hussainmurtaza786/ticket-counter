import { Box, Button, ButtonGroup, Flex, Image, FormControl, FormLabel, Input, VStack, CloseButton } from '@chakra-ui/react'
import React from 'react'

function Movie({onClose}) {
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
          Movie Ticket Form
        </label>
        <Image
          zIndex={1}
          width="100px"
          height="100px"
          src="https://static.vecteezy.com/system/resources/thumbnails/030/347/569/small_2x/ai-generated-image-of-delicious-popcorn-on-a-transparent-background-free-png.png"
          alt="Popcorn"
        />
      </Box>
      <form>
        <VStack spacing={4} align='stretch'>
          <FormControl>
            <FormLabel>Movie Name</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input type="date" />
          </FormControl>

          <FormControl>
            <FormLabel>Time</FormLabel>
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


            <Button spacing={4} mt={4} colorScheme='teal' type='submit'>Submit</Button>

        </VStack>
      </form>
    </Box>
  )
}

export default Movie
