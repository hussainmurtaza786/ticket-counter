import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";

function Items() {
  return (
    <div>
      <Box
        m="10px"
        position="absolute"
        top={"4px"}
        right={0}
        color={"whitesmoke"}
      >
        <Flex>
          <Box mr={16} bg="blue.200" p={2} borderRadius="md">
            <Link
              color="black"
              _hover={{
                color: "blue",
              }}
            >
              Home
            </Link>
          </Box>
          <Box mr={16} bg="pink.200" p={2} borderRadius="md">
            <Link
              color="black"
              _hover={{
                color: "red",
              }}
            >
              Contact
            </Link>
          </Box>
          <Box mr={16} bg="teal.200" p={2} borderRadius="md">
            <Link
              color="black"
              _hover={{
                color: "green",
              }}
            >
              Ticket
            </Link>
          </Box>
          <Box zIndex={10} mr={16} bg="yellow.200" p={2} borderRadius="md">
            <Link
              color="black"
              _hover={{
                color: "orange",
              }}
            >
              About
            </Link>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default Items;
