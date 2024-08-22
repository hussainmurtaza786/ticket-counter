import React from 'react'

function Button({showTicket}) {
  return (
    <div>
       <Button
          width={{ base: "150px", md: "180px" }}
          height={{ base: "50px", md: "60px" }}
          position="absolute"
          top={{ base: "20rem", md: "25rem" }}
          m={{ base: "0 2rem", md: "0 4rem" }}
          onClick={showTicket}
          bg="blue.500"
          color="white"
          fontSize="lg"
          fontWeight="bold"
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
    </div>
  )
}

export default Button
