import { Box, Flex, Icon, Image, Link, position, Text } from "@chakra-ui/react";
import React from "react";
import style from './Header.module.css'


function Header() {
  return (
    <Box  height='100vh' width='100%' >
          


      <Box
        bgColor="#3498db"
        height="70px"
        opacity={0.2}
        width="100%"
        position={"absolute"}
        top={0}
      >
        <Box

          fontSize="36px"
          fontWeight="bold"
          m="10px"
          color='#FF4500'
          fontFamily={"'Open Sans', 'Raleway', sans-serif'"}
          textShadow='2px 2px 10px rgba(0, 0, 0, 0.7)'
          borderRadius="10px"
          boxShadow='0 4px 8px rgba(0, 0, 0, 0.5)'

        >
          Ticket Counter
        </Box>
      </Box>

      <Box m="10px" position="absolute" top={'4px'} right={0} color={"whitesmoke"}>
        <Flex>
          <Box mr={16} bg="blue.200" p={2} borderRadius="md">
            <Link
              color="black"
              _hover={{
                color: 'blue',
                textDecoration: "underline",
              }}
            >
              Home
            </Link>
          </Box>
          <Box mr={16} bg="pink.200" p={2} borderRadius="md">
            <Link
              color="black"
              _hover={{
                color: 'red',
                textDecoration: "underline",
              }}
            >
              Contact
            </Link>
          </Box>
          <Box mr={16} bg="teal.200" p={2} borderRadius="md">
            <Link
              color="black"
              _hover={{
                color: 'green',
                textDecoration: "underline",
              }}
            >
              Ticket
            </Link>
          </Box>
          <Box mr={16} bg="yellow.200" p={2} borderRadius="md">
            <Link
              color="black"
              _hover={{
                color: 'orange',
                textDecoration: "underline",
              }}
            >
              About
            </Link>
          </Box>
        </Flex>
      </Box>

      {/* Navbar completed */}



      <Box position='relative'>
        <Flex flexDirection='column' alignItems={"center"} justifyContent={"center"}>

          <Box display='flex'
            flexDirection='column'
            backgroundColor='#386B99'
            mt='6rem'
            borderTop='2rem solid #386B99'
            borderRight='5px solid #386B99'
            borderLeft='5px solid #386B99'
            borderBottom='5px solid #386B99'
            // border='4px solid #386B99'
            width='20rem'
            height='35rem'
            borderRadius='25px'
            top='1rem'
            position='absolute'
          >
            <Flex >
              <Box width='20px' mb='4px' ml=' 2rem ' height='20px' border='3px solid white' borderRadius='12px' >
                <Box width='15px' mb='4px' ml='23px' height='15px' bgColor='white' borderRadius='12px'></Box>
              </Box>
            </Flex>

            <Box
              backgroundColor='white'
              border='2px solid #386B99'
              width='19.5rem'
              height='30rem'
              borderRadius='20px'
            >
            </Box>
            <Box
              backgroundColor="red"
              color="white"
              transform="rotate(30deg)"
              zIndex={-1}
              left="12rem"
              bottom="2rem"
              position="absolute"
              border="2px solid red"
              borderRadius="25px"
              width="250px"
              height="350px"
              display="flex"
              fontSize='30px'
              flexDirection='column'
              textAlign="center"
              padding="1rem"
            >
              Sports

              <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" style={{  width: '200px', height: '300px', fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, strokeWidth: 2 }}>
                <g>
                  <circle width='100px' cx="36" cy="36" r="28" />
                  <path d="M36 8v56c-8.5604 0-15.5-12.536-15.5-28s6.9396-28 15.5-28 15.5 12.536 15.5 28-6.9396 28-15.5 28" />
                  <path d="M64 36H8" />
                  <path d="M60 22H12" />
                  <path d="M60 50H12" />
                </g>
              </Icon>

            </Box>
            <Icon className={style.sunIcon} style={{ width:'200px', height:'200px',position:'absolute',top:"-7rem",right:'12rem', zIndex:'-1'}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="m20.5 59.7 7-7.2c-2.5-.5-4.8-1.5-6.9-2.9zm23-55.4-7 7.2c2.5.5 4.8 1.5 6.9 2.9zm-39.2 39.2 10.1-.1c-1.4-2.1-2.4-4.4-2.9-6.9zm55.4-23-10.1.1c1.3 2.1 2.3 4.4 2.9 6.9zm-55.4 0 7.2 7c.5-2.5 1.5-4.8 2.9-6.9zm55.4 23-7.2-7c-.5 2.5-1.5 4.8-2.9 6.9zm-39.2-39.2.1 10.1c2.1-1.3 4.4-2.3 6.9-2.9zm23 55.4-.1-10.1c-2.1 1.4-4.4 2.4-6.9 2.9z" fill="#ffe62e"/><g fill="#ffce31"><path d="m14.8 44-4 9.3 9.3-4c-2.1-1.5-3.9-3.3-5.3-5.3m34.4-24 4-9.3-9.2 4c2 1.5 3.8 3.3 5.2 5.3m-37.8 8.3-9.4 3.7 9.4 3.7c-.3-1.2-.4-2.4-.4-3.7s.1-2.5.4-3.7m41.2 7.4 9.4-3.7-9.4-3.7c.2 1.2.4 2.5.4 3.7 0 1.3-.1 2.5-.4 3.7m-32.6-20.9-9.3-4 4 9.3c1.5-2.1 3.3-3.9 5.3-5.3m24 34.4 9.3 4-4-9.3c-1.5 2.1-3.3 3.9-5.3 5.3m-8.3-37.8-3.7-9.4-3.7 9.4c1.2-.2 2.5-.4 3.7-.4s2.5.1 3.7.4m-7.4 41.2 3.7 9.4 3.7-9.4c-1.2.3-2.4.4-3.7.4s-2.5-.1-3.7-.4"/><circle cx="32" cy="32" r="19"/></g></Icon>

          </Box>
      <Icon  className={style.animatedIcn} zIndex={1} top='4.5rem' right='10rem'  position='absolute' xmlns="http://www.w3.org/2000/svg" height="218" preserveAspectRatio="xMidYMid" viewBox="0 0 128 218" width=""><g fill-rule="evenodd"><path d="m127.04 63.145c0 34.867-63.131 88.36-63.131 88.36s-63.131-53.493-63.131-88.36 28.265-63.133 63.131-63.133c34.867 0 63.131 28.266 63.131 63.133z" fill="#fbb713" /><path d="m63.909 151.505s63.131-53.493 63.131-88.36-28.264-63.133-63.131-63.133c0 0-2.521 1.827-2.521 1.827 21.682 6.781 37.764 31.657 37.764 61.306 0 23.231-22.053 68.583-36.772 87.02 0 0 1.529 1.34 1.529 1.34z" fill="#ff3a2f" /><path d="m92.546 6.931c13.58 11.579 22.219 28.784 22.219 48.03 0 31.508-51.543 78.215-61.476 86.925 6.326 5.974 10.62 9.619 10.62 9.619s63.131-53.493 63.131-88.36c0-24.546-14.037-45.77-34.494-56.214z" fill="#020403" opacity=".35" /><path d="m63.14 151.505s-63.131-53.493-63.131-88.36 28.265-63.133 63.131-63.133c0 0 2.52 1.827 2.52 1.827-21.681 6.781-37.763 31.657-37.763 61.306 0 23.231 22.053 68.583 36.771 87.02 0 0-1.528 1.34-1.528 1.34z" fill="#0cb04a" /><path d="m16.414 71.203c-1.51 0-2.918-.953-3.427-2.465-1.341-4.001-2.023-7.776-2.023-11.226 0-15.965 7.013-31.023 19.237-41.313 1.522-1.284 3.806-1.09 5.093.439 1.284 1.527 1.089 3.806-.438 5.093-10.589 8.912-16.663 21.955-16.663 35.781 0 2.666.555 5.668 1.647 8.925.636 1.892-.383 3.941-2.274 4.577-.382.128-.77.189-1.152.189z" fill="#fff" /><path d="m63.141 162.625c-1.997 0-3.615-1.619-3.615-3.615v-7.505c0-1.996 1.618-3.615 3.615-3.615 1.996 0 3.615 1.619 3.615 3.615v7.505c0 1.996-1.619 3.615-3.615 3.615z" fill="#142a3b" /><path d="m92.849 216.892h-57.88v-57.882h57.88z" fill="#142a3b" /><path d="m76.481 159.01v57.882h16.368v-57.882z" fill="#020403" opacity=".35" /></g></Icon>

        </Flex>
      </Box>




      <Box p={10} width={'100%'} position={"absolute"} top="4rem" left="0">
        {/* <Text
          textDecoration={"underline"}
          opacity={0.9}
          fontSize="70px"
          position={"absolute"}
          top='12rem'
          left='35rem'
          color={"#e02e0b"}
          textShadow="3px 3px 6px rgba(0, 0, 0, 0.7)"
          fontFamily="'Roboto', sans-serif"
        >
          Get   <br />
        </Text>
        <Text
          textDecoration={"underline"}
          opacity={0.9}
          fontSize="50px"
          position={"absolute"}
          top='28rem'
          left='32rem'
          color={"#e02e0b"}
          textShadow="3px 3px 6px rgba(0, 0, 0, 0.7)"
          fontFamily="'Roboto', sans-serif"
        >
          Effortlessly
        </Text> */}
        <Text
          position={"absolute"}
          top='7rem'
          opacity={0.9}
          color={"#3498db"}
          textDecoration={"underline"}
          fontSize="30px"
          fontFamily="'Roboto', sans-serif"
        >
          Buy tickets for
        </Text>
        <ul style={{ position: 'absolute', top: '10rem', listStyleType: "none", paddingLeft: 0 }}>
          <li
            style={{
              fontSize: "30px",
              marginBottom: "12px",
              fontFamily: "Open Sans, Raleway, sans-serif",
              color: "#fff",
              marginTop: '20px',
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
              padding: "10px 20px",
              borderRadius: "10px",
              background: `linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ), url('https://t4.ftcdn.net/jpg/02/53/94/79/360_F_253947988_p2BXZnrCvrcxlRfQcTimOJQfqBaG8hUo.jpg') center/cover`,
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              width: "180px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 12px 20px rgba(0, 0, 0, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.3)";
            }}
          >
            Flight
          </li>

          <li
            style={{
              fontSize: "30px",
              marginBottom: "12px",
              fontFamily: "Open Sans, Raleway, sans-serif",
              color: "#FFFFFF",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
              padding: "10px 20px",
              borderRadius: "10px",
              background: `linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ), url('https://media.istockphoto.com/id/1478374885/photo/joyful-family-watching-movie-in-cinema.jpg?s=612x612&w=0&k=20&c=U0Qp-c2vCTUPG51ZOD2H7KcrByyBKow3r9wSR2QMFZU=') center/cover`,
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              width: "180px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 12px 20px rgba(0, 0, 0, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.3)";
            }}
          >
            Movies
          </li>

          <li
            style={{
              fontSize: "30px",
              marginBottom: "12px",
              fontFamily: "Open Sans, Raleway, sans-serif",
              // fontFamily: "'Roboto', sans-serif",
              color: "#FFFFFF",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
              padding: "10px 20px",
              borderRadius: "10px",
              background: `linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ), url('https://t4.ftcdn.net/jpg/02/86/76/77/360_F_286767786_boXM75PDLYIsYWzabZ3fKcM3esv50TNS.jpg') center/cover`,
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              width: "180px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 12px 20px rgba(0, 0, 0, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.3)";
            }}
          >
            Sports
          </li>
        </ul>
        {/* <Text
          opacity={0.9}
          color={"#3498db"}
          fontSize="30px"
          mt={4}
          fontFamily="'Roboto', sans-serif"
        >
          in a secure way through our user-friendly platform.
        </Text> */}
      </Box>
    </Box >
  );
}

export default Header;
