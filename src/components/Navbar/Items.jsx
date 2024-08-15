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
          <Box
            mr={16}
            bg="#0099ff"
            p={2}
            borderRadius="md"
            transition="transform 0.3s ease, color 0.3s ease"
            _hover={{
              transform: "scale(1.1)",
              color: "blue.200",
            }}
          >
            <Link
              color="black"
              _hover={{
                color: "blue.200",
              }}
            >
              Home
            </Link>
          </Box>
          <Box
            mr={16}
            bg="#0099ff"
            p={2}
            borderRadius="md"
            transition="transform 0.3s ease, color 0.3s ease"
            _hover={{
              transform: "scale(1.1)",
              color: "blue.200",
            }}
          >
            <Link
              color="black"
              _hover={{
                color: "blue.200",
              }}
            >
              Ticket
            </Link>
          </Box>
          <Box
            mr={16}
            bg="#0099ff"
            p={2}
            borderRadius="md"
            transition="transform 0.3s ease, color 0.3s ease"
            _hover={{
              transform: "scale(1.1)",
              color: "blue.200",
            }}
          >
            <Link
              color="black"
              _hover={{
                color: "blue.200",
              }}
            >
              About
            </Link>
          </Box>
          <Box
            mr={16}
            bg="#0099ff"
            p={2}
            zIndex={1000000}
            borderRadius="md"
            transition="transform 0.3s ease, color 0.3s ease"
            _hover={{
              transform: "scale(1.1)",
              color: "blue.200",
            }}
          >
            <Link
              color="black"
              _hover={{
                color: "blue.200",
              }}
            >
              Contact
            </Link>
          </Box>



        </Flex>
      </Box>
    </div>
  );
}

export default Items;
