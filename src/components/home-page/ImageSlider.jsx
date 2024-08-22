import { Box, Image } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

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
            maxW="100%"
            // maxH='400px'
            overflow="hidden"
            borderRadius="md"
            boxShadow="lg"
            position="relative"
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
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image
                            src={image}
                            objectFit="cover"
                            borderRadius="md"
                            width="100%"
                            height="90vh"
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default ImageSlider;
