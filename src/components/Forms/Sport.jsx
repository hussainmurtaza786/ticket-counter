import React from 'react'
import { Box, Button, ButtonGroup, Flex, Image, FormControl, FormLabel, Input, VStack, Radio, RadioGroup, CloseButton } from '@chakra-ui/react'

function Sport({ onClose }) {
  return (
    <Box display='flex' flexDirection='column' width='500px' height='100%' bgColor='whitesmoke' p='20px' boxShadow='xl' borderRadius='md'>
      <CloseButton onClick={() => onClose(false)} fontSize='20px' color='red'>X</CloseButton>

      <Box display='flex' flexDirection='column' alignItems='center' marginBottom='20px'>
        <label style={{ margin: '15px 8px', fontSize: '30px', fontWeight: 'bold' }}>
          Sports Ticket Form
        </label>
        <Image zIndex={1} src="https://png.pngtree.com/thumb_back/fh260/background/20220217/pngtree-colorful-sports-theme-background-material-image_944423.jpg" alt="Popcorn" />
      </Box>
      <form>
        <FormControl >
          <FormLabel>Sport Name</FormLabel>
          <Input type='text' />
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

        <VStack spacing={4} align='stretch'>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type='email' />
          </FormControl>


          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input type='number' />
          </FormControl>

          <FormControl>
            <FormLabel> Number of Ticket</FormLabel>
            <Input type='number' />
          </FormControl>

          <FormControl as="fieldset">
            <FormLabel as="legend">Payment Method</FormLabel>
            <RadioGroup defaultValue="cash">
              <Flex justifyContent='left'>
                <Radio m='4px 8px' value="cash">Cash</Radio>
                <Radio value="card">Card</Radio>
              </Flex>
            </RadioGroup>
          </FormControl>

          <Button spacing={4} mt={4} colorScheme='teal' type='submit'>Submit</Button>

        </VStack>
      </form>
    </Box>
  )
}

export default Sport
