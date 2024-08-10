import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import bg from "../../Images/bg.jpg";

function Header() {
  return (
    <Box width="100%" bgColor="#3498db" opacity={0.9} position="relative">
      <Box>
        <Image
          top={0}
          position={"absolute"}
          width="100%"
          // opacity={0.6}
          right={0}
          bgColor="#3498db"
          // src="https://img.freepik.com/free-photo/booking-hotel-reservation-travel-destination-concept_53876-121094.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722902400&semt=ais_hybrid"
          src="https://img.freepik.com/premium-vector/online-travel-ticket-store-through-transportation-journey-booking-hand-drawn-illustration_2175-10329.jpg"
        />
      </Box>

      <Box
        // background="transparent"
        // bgColor="#3498db"
        bgColor="white"
        height="50px"
        opacity={0.3}
        width="100%"
        position={"absolute"}
        top={0}
      >
        <Box
          fontSize="30px"
          fontWeight={600}
          m="5px"
          fontFamily={"Open Sans, Raleway, sans-serif"}
          // fontFamily="'Montserrat', sans-serif"
        >
          Ticket Counter
        </Box>
      </Box>
      <Box m="10px" position="absolute" top={0} right={0} color={"whitesmoke"}>
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

      <Box p={10} position={"absolute"} top="4rem" left="0">
        <Text
          textDecoration={"underline"}
          opacity={0.9}
          fontSize="50px"
          // color={"#2ecc71"}
          color={"black"}
          textShadow="3px 3px 6px rgba(0, 0, 0, 0.7)"
          fontFamily="'Roboto', sans-serif"
        >
          Get Tickets Effortlessly <br /> Online
        </Text>
        <Text
          opacity={0.9}
          color={"#3498db"}
          fontSize="30px"
          fontFamily="'Roboto', sans-serif"
        >
          Find and buy tickets for:
        </Text>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li
            style={{
              fontSize: "30px",
              marginBottom: "12px",
              fontFamily: "Open Sans, Raleway, sans-serif",
              color: "#fff", 
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
              padding: "10px 20px",
              borderRadius: "10px",
              background: `linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ), url('https://t4.ftcdn.net/jpg/02/53/94/79/360_F_253947988_p2BXZnrCvrcxlRfQcTimOJQfqBaG8hUo.jpg') center/cover`,
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              width: "160px",
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
              width: "160px",
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
              width: "160px",
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
        <Text
          opacity={0.9}
          color={"#3498db"}
          fontSize="30px"
          mt={4}
          fontFamily="'Roboto', sans-serif"
        >
          in a secure way through our user-friendly platform.
        </Text>
      </Box>
    </Box>
  );
}

export default Header;
