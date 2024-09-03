import { Box, Button, Flex } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
function TicketList({ showForm }) {
  return (
    <div>
      <Flex>
        <Box m="4px 8px">
          <ButtonStyle
            onClick={() => showForm("Transportation")}
            backgroundImage="https://t4.ftcdn.net/jpg/02/44/80/75/360_F_244807532_NxTCRHVFEkIfCClYMaf02j45SxxLhUXv.jpg"
          >
            Transports
          </ButtonStyle>
        </Box>
        <Box m="4px 8px">
          <ButtonStyle
            backgroundImage="https://media.istockphoto.com/id/1478374885/photo/joyful-family-watching-movie-in-cinema.jpg?s=612x612&w=0&k=20&c=U0Qp-c2vCTUPG51ZOD2H7KcrByyBKow3r9wSR2QMFZU="
            onClick={() => showForm("Movie")}
          >
            Movies
          </ButtonStyle>
        </Box>
        <Box m="4px 8px">
          <ButtonStyle
            onClick={() => showForm("Sports")}
            backgroundImage="https://t4.ftcdn.net/jpg/02/86/76/77/360_F_286767786_boXM75PDLYIsYWzabZ3fKcM3esv50TNS.jpg"
          >
            Sports
          </ButtonStyle>
        </Box>
      </Flex>
    </div>
  );
}

export default TicketList;

const ButtonStyle = ({ onClick, backgroundImage, children }) => {
  const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
  return (
    <Box>
    <Button
      position="relative"
      backgroundColor="#1a1a1a"
      onClick={onClick}
      width="200px"
      height="70px"
      color="white"
      fontSize="lg"
      fontWeight="bold"
      padding="8px 24px"
      borderRadius="12px"
      boxShadow="0 5px 15px rgba(0, 0, 0, 0.2)"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "0 7px 20px rgba(0, 0, 0, 0.3)",
      }}
      _active={{
        transform: "scale(0.98)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "200% 200%",
        backgroundPosition: "center",
        opacity: 0.3, 
        borderRadius: "15px",
        zIndex: 1, 
      }}
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "full",
        zIndex: 2,
      }}
    >
      <Box position="relative" zIndex={3}>
        {children}
      </Box>
    </Button>
  </Box>
  
  );
};
