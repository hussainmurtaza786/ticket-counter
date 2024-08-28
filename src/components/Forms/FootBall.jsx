import React from 'react'
import { Box, Button, Flex, Image, FormControl, FormLabel, Input, VStack, Radio, RadioGroup, CloseButton, Select } from '@chakra-ui/react';

function FootBall() {
  return (
    <div>
        <form>
      <VStack spacing={4} align='stretch'>
        <FormControl>
          <FormLabel>Match Date</FormLabel>
          <Input type='date' />
        </FormControl>

        <FormControl>
          <FormLabel>Stadium</FormLabel>
          <Input type='text' />
        </FormControl>

        <FormControl>
          <FormLabel>Home Team</FormLabel>
          <Input type='text' />
        </FormControl>

        <FormControl>
          <FormLabel>Away Team</FormLabel>
          <Input type='text' />
        </FormControl>

        <FormControl>
          <FormLabel>Number of Tickets</FormLabel>
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

        <Button mt={4} colorScheme='teal' type='submit'>Submit</Button>
      </VStack>
    </form>
    </div>
  )
}

export default FootBall
