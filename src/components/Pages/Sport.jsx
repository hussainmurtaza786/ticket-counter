import {
  Badge,
  Box,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const SportPage = () => {
  const sportData = useSelector((state) => state.ticket.sports);

  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {sportData &&
          sportData.map((sport) => (
            <Box
              key={sport.id}
              width="400px"
              m="16px 8px"
              border="2px dashed black"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              position="relative"
              bg="white"
              shadow="md"
            >
              <Image
                src={
                  sport.sportType === "cricket"
                    ? "https://png.pngtree.com/thumb_back/fh260/background/20230714/pngtree-d-illustration-of-a-cricket-stadium-with-a-front-view-and-image_3857836.jpg"
                    : sport.sportType === "football"
                    ? "https://img.freepik.com/free-vector/gradient-football-field-background_23-2149000103.jpg"
                    : "https://t3.ftcdn.net/jpg/02/86/26/28/360_F_286262835_HZL6nc8KDiZlYawKW0gInGK7yZMu4EUC.jpg"
                }
                alt={sport.sportType}
                objectFit="cover"
                width="100%"
                height="100%"
                position="absolute"
                top="0"
                left="0"
                zIndex="0"
              />

              <VStack
                align="start"
                spacing={3}
                position="relative"
                right="0"
                bottom="0"
                p={4}
                zIndex="1"
                color="white"
                height="100%"
                bg="rgba(0, 0, 0, 0.5)"
              >
                <HStack>
                  <Text fontWeight="bold">Sport:</Text>
                  <Badge fontSize="13px" variant="outline" colorScheme="green">
                    {sport.sportType}
                  </Badge>
                </HStack>
                <HStack>
                  <Text fontWeight="bold">Date:</Text>
                  <Text>{sport.matchDate}</Text>
                </HStack>
                <HStack>
                  <Text fontWeight="bold">Stadium :</Text>
                  <Text>{sport.venue}</Text>
                </HStack>
                <HStack>
                  <Text fontWeight="bold">Team :</Text>
                  <Text>{sport.teams}</Text>
                </HStack>
                <HStack>
                  <Text fontWeight="bold">Price :</Text>
                  <Text>{sport.price}</Text>
                </HStack>

                {sport.sportType === "tennis" && (
                  <>
                    <HStack>
                      <Text fontWeight="bold">Court Name :</Text>
                      <Text>{sport.court}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="bold">Player 1 :</Text>
                      <Text>{sport.player1}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="bold">Player 2 :</Text>
                      <Text>{sport.player2}</Text>
                    </HStack>
                  </>
                )}
              </VStack>
            </Box>
          ))}
      </Grid>
    </Box>
  );
};

export default SportPage;
