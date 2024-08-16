import { Button, Flex } from "@chakra-ui/react";

function TicketList({ showMovie }) {
  return (
    <div>
      <Flex m="15px 4rem" flexDirection='column' >
        <ButtonStyle
          onClick={() => showMovie("Flight")}
          backgroundImage="https://image.slidesdocs.com/responsive-images/background/above-the-clouds-animated-airplane-in-flight-powerpoint-background_9c9f8f0944__960_540.jpg"
        >
          Flight
        </ButtonStyle>

        <ButtonStyle
          backgroundImage="https://media.istockphoto.com/id/1478374885/photo/joyful-family-watching-movie-in-cinema.jpg?s=612x612&w=0&k=20&c=U0Qp-c2vCTUPG51ZOD2H7KcrByyBKow3r9wSR2QMFZU="
          onClick={() => showMovie("Movie")}
        >
          Movie
        </ButtonStyle>

        <ButtonStyle
          onClick={() => showMovie("Sports")}
          backgroundImage="https://t4.ftcdn.net/jpg/02/86/76/77/360_F_286767786_boXM75PDLYIsYWzabZ3fKcM3esv50TNS.jpg"
        >
          Sport
        </ButtonStyle>
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
      background={`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${backgroundImage}') center/cover`}
      boxShadow="0 8px 15px rgba(0, 0, 0, 0.3)"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      width="180px"
      height="60px"
      textAlign="center"
      cursor="pointer"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 12px 20px rgba(0, 0, 0, 0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.3)";
      }}
    >
      {children}
    </Button>
  );
};
