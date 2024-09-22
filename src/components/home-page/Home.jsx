import { Box, Button, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import WebText from "./Text";
import background from "../../background.png";
import { Link,  } from "react-router-dom";

function Home() {

 

  return (
    <Box>
      <Box
        backgroundColor="#1a1a1a"
        width="100%"
        position="relative"
        textAlign="center"
        color="white"
      >
        <Image width="100%" opacity={0.3} src={background} />

        <Box
          position="absolute"
          top="40%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="1"
        >
          <WebText />
        </Box>
      </Box>

      <Box
        position="absolute"
        bottom="17rem"
        left="50%"
        transform="translateX(-50%)"
        zIndex="1"
      ></Box>

      <Box
        position="absolute"
        bottom="17rem"
        left="40rem"
        transform="translateX(-50%)"
        zIndex={1000000}
        width="150px"
        padding="1rem 2rem"
        borderRadius="md"
        backgroundColor="transparent"
        color="white"
        fontWeight="bold"
        textAlign="center"
        boxShadow="0 0 15px rgba(0, 255, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.5)"
        transition="all 0.3s ease"
        _hover={{
          boxShadow:
            "0 0 20px rgba(0, 255, 255, 1), 0 0 40px rgba(0, 255, 255, 1), 0 0 80px rgba(0, 255, 255, 1)",
        }}
      >
        <Link to="/contact">Contact us</Link>
      </Box>

      {/* Ticket List */}
      <Box
        position="absolute"
        bottom="10rem"
        left="50%"
        transform="translateX(-50%)"
        zIndex="1"
      ></Box>
    </Box>
  );
}

export default Home;

// const ListStyle = ({ children, path }) => {
//   return (
//     <Box
//       m={4}
//       p={2}
//       zIndex={1000000}
//       userSelect='none'
//       borderRadius="md"
//       boxShadow="0 0 10px rgba(56, 107, 153, 0.5), 0 0 20px rgba(56, 107, 153, 0.5)"
//       transition="box-shadow 0.3s ease"
//       _hover={{
//         boxShadow: "0 0 15px rgba(56, 107, 153, 0.7), 0 0 30px rgba(56, 107, 153, 0.7)"
//       }}
//     >
//       <NavLink
//         to={path}
//         style={() => ({
//           fontSize: '20px',
//           backgroundColor: 'white',
//           color: '#386B99',
//           textDecoration: 'none',
//           transition: 'transform 0.3s ease, color 0.3s ease',
//           padding: "12px",
//           borderRadius: "12px",
//         })}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.color = '#386B99';
//           e.currentTarget.style.transform = 'scale(1.1)';
//         }}
//         onMouseLeave={(e) => {
//           if (!e.currentTarget.classList.contains('active')) {
//             e.currentTarget.style.color = 'black';
//             e.currentTarget.style.transform = 'scale(1)';
//           }
//         }}
//       >
//         {children}
//       </NavLink>
//     </Box>
//   );
// };
