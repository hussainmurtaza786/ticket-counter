import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';

function ImageSlider() {
    const images = [
        "https://www.popsci.com/wp-content/uploads/2022/07/11/josue-isai-ramos-figueroa-n2NBgIx3A28-unsplash.jpg?text=Event+1",
        "https://wallpapers.com/images/hd/sports-balls-in-4k-4tcqtsgp899vx4f4.jpg?text=Event+2",
        "https://wallpapers.com/images/hd/movie-theater-background-2048-x-1536-9wlq655dcp63cdi8.jpg?text=Event+3",
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };

    return (
        <Box
            // maxW="100%"
            height={{ base: "30vh", md: "40vh", lg: "90vh" }}
            overflow="hidden"
            borderRadius="md"
            boxShadow="lg"
        >
            <Slider {...settings}>
                {images.map((image, index) => (
                    <Box
                        display="flex"
                        flexDirection="column"
                        key={index}
                    >
                        <Image
                            height="100%"
                            width="100%"
                            src={image}
                            alt={`Event ${index + 1}`}
                            objectFit="cover"
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default ImageSlider;
