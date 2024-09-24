import React, { useState } from "react";
import { Box, Kbd, Select, Text } from "@chakra-ui/react";
import Cricket from "../Forms/Cricket";
import FootBall from "../Forms/FootBall";
import Movie from "../Forms/Movie";
import Tennis from "../Forms/Tennis";
import TicketSearch from "../Forms/Transportation";

function FetchData() {
  const [selectedTicket, setSelectedTicket] = useState("movie");

  const handleSportChange = (e) => {
    setSelectedTicket(e.target.value);
  };

  const values = ["movie", "cricket", "football", "tennis", "flight"];

  const getDescription = () => {
    switch (selectedTicket) {
      case "movie":
        return "Book your tickets for the latest blockbuster movies!";
      case "cricket":
        return "Catch the excitement of live cricket matches and cheer for your favorite team!";
      case "football":
        return "Join the thrill of football with live matches and support your team!";
      case "tennis":
        return "Experience the intensity of tennis matches and witness the top players in action!";
      case "flight":
        return "Book your tickets for the next adventure and explore new destinations!";
      default:
        return "";
    }
  };

  return (
    <Box userSelect="none" p={{ base: 2, md: 4 }} > {/* Added padding for responsiveness */}
      <Box display="flex" m="2px" userSelect="none">
        <Select
          value={selectedTicket}
          onChange={handleSportChange}
          m={4}
          width={{ base: "100%", sm: "200px" }} 
        >
          {values.map((val) => (
            <option key={val} value={val}>
              {val.toUpperCase()}
            </option>
          ))}
        </Select>
      </Box>
      
      <Text 
        fontSize={{ base: "18px", md: "20px", lg: "25px" }} // Adjust font size for responsiveness
        mb={4} 
        textAlign="center"
      >
        <Kbd p={{ base: "2px 8px", md: "4px 10px" }}>{getDescription()}</Kbd> {/* Adjust padding for Kbd */}
      </Text>

      <Box m="12px 3px">
        {selectedTicket === "movie" && <Movie />}
        {selectedTicket === "cricket" && <Cricket />}
        {selectedTicket === "football" && <FootBall />}
        {selectedTicket === "tennis" && <Tennis />}
        {selectedTicket === "flight" && <TicketSearch />}
      </Box>
    </Box>
  );
}

export default FetchData;
