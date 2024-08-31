import { Box, Image } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function ImageSlider() {
  const images = [
    "https://www.popsci.com/wp-content/uploads/2022/07/11/josue-isai-ramos-figueroa-n2NBgIx3A28-unsplash.jpg",
    "https://wallpapers.com/images/hd/sports-balls-in-4k-4tcqtsgp899vx4f4.jpg",
    "https://wallpapers.com/images/hd/movie-theater-background-2048-x-1536-9wlq655dcp63cdi8.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box 
    m='20px  4px'
    display='flex'
    justifyContent='right'
    // border='2px solid red'
    >
    <Box
      
      maxW="700px"
      maxH='600px'
      overflow="hidden"
      borderRadius="md"
      boxShadow="lg"
    >
      <Box
        display="flex"
        transition="transform 0.5s ease-in-out"
        transform={`translateX(-${currentIndex * 100}%)`}
        width={images}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            flex="0 0 100%"
            display="flex"
            justifyContent="right"
            alignItems="center"
            border='2px dashed red'
          >
            <Image
              src={image}
              objectFit="cover"
              borderRadius="md"
              width="100%"
              height='100%'
            />
          </Box>
        ))}
      </Box>
    </Box>
    </Box>
  );
}

export default ImageSlider;
