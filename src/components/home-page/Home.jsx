import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import Form from '../Forms/Form'
import WebImage from './Image'
import WebText from './Text'
import TicketList from './TicketList'



function Home() {

  const [formType, setFormType] = useState('')

  const showForm = (_formType) => {
    setFormType(_formType)

  }
  const [ticket, setTicket] = useState(false)

  const showTicket = () => {
    setTicket(true)

  }

  return (
    <Box display='flex' flexDirection='column'   >
      <Box>
        <WebImage />
        <WebText />
        <Box >
          <Button
            m='0px 4rem'
            onClick={showTicket}
            bg="blue.500"
            color="white"
            fontSize="lg"
            fontWeight="bold"
            width='150px'
            height='50px'
            px={6}
            py={4}
            borderRadius="md"
            boxShadow="lg"
            _hover={{
              bg: "blue.600",
              transform: "scale(1.05)",
            }}
            _active={{
              bg: "blue.700",
              transform: "scale(0.95)",
            }}
            _focus={{
              boxShadow: "outline",
            }}
          >
            Show Tickets
          </Button>
          {ticket && <TicketList showMovie={showForm} />}
        </Box>
      </Box>


      <Box>

        {ticket && <Form showMovie={showForm} formType={formType} />}
      </Box>

      <Box>



      </Box>


    </Box>
  )
}

export default Home
