import React from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlidingBox = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [
    "https://via.placeholder.com/800x400.png?text=Event+1",
    "https://via.placeholder.com/800x400.png?text=Event+2",
    "https://via.placeholder.com/800x400.png?text=Event+3",
  ];

  return (
    <Box
      maxW="800px"
      mx="auto"
      overflow="hidden"
      borderRadius="md"
      boxShadow="lg"
    >
      {/* <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <Image src={image} alt={`Event ${index + 1}`} />
          </Box>
        ))}
      </Slider> */}
    </Box>
  );
};

export default SlidingBox;
