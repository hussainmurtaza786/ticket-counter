import { Box, Button, Flex } from "@chakra-ui/react";

function TicketList({ showForm }) {
  return (
    <div>
      <Flex  >

        <Box m='4px 8px'>
          <ButtonStyle
            onClick={() => showForm("Transportation")}
            backgroundImage="https://png.pngtree.com/thumb_back/fh260/back_our/20190628/ourmid/pngtree-beautiful-hand-painted-blue-transportation-industry-background-image_280158.jpg"
          >
            Transports
          </ButtonStyle>
        </Box>
        <Box m='4px 8px' opacity={0.6}>

          <ButtonStyle 
            backgroundImage="https://media.istockphoto.com/id/1478374885/photo/joyful-family-watching-movie-in-cinema.jpg?s=612x612&w=0&k=20&c=U0Qp-c2vCTUPG51ZOD2H7KcrByyBKow3r9wSR2QMFZU="
            onClick={() => showForm("Movie")}
          >
            Movies
          </ButtonStyle>
        </Box>
        <Box m='4px 8px'>

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
  return (
    <Button
      onClick={onClick}
      fontSize="30px"
      marginBottom="12px"
      fontFamily="Open Sans, Raleway, sans-serif"
      color="#FFFFFF"
      textShadow="2px 2px 5px rgba(0, 0, 0, 0.7)"
      padding="10px 20px"
      borderRadius="10px"
      backgroundImage={`url('${backgroundImage}')`}
      backgroundSize="cover"
      backgroundPosition="center"
      boxShadow="0 8px 15px rgba(0, 0, 0, 0.3)"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      width="180px"
      height="60px"
      textAlign="center"
      cursor="pointer"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "0 12px 20px rgba(0, 0, 0, 0.5)",
      }}
      _active={{
        transform: "scale(1)",
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
      }}
      _focus={{ boxShadow: 'outline' }}
    >
      {children}
    </Button>
  );
};
