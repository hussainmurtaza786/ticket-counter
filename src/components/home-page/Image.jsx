import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import React from "react";
import style from "./Image.module.css";
import camera from "../../Images/camera.png";
import ticket from '../../Images/pngegg.png'
import machine from '../../Images/ticketMachine.png'
function WebImage() {
  return (
    <Box zIndex={2} position="relativ">

      <Box
      opacity={0.5}
        zIndex={3}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        backgroundColor="#386B99"
        mt="6rem"
        border="7px solid #386B99"
        borderTop="2rem solid #386B99"
        width="20rem"
        height="80vh"
        borderRadius="25px"
        top="2rem"
        right="27rem"
        position="absolute"
      >
        <Flex>
          <Box
            width="20px"
            mb="4px"
            ml=" 4px "
            height="20px"
            border="3px solid white"
            borderRadius="12px"
          >
            <Box
              width="15px"
              mb="4px"
              ml="20px"
              height="15px"
              bgColor="white"
              borderRadius="12px"
            ></Box>
          </Box>
        </Flex>
        <Image left='7rem' position='absolute' zIndex={1} opacity='0.7' src={ticket} />
        <Box
          backgroundColor="white"
          border="2px solid #386B99"
          width="19rem"
          height="30rem"
          borderRadius="20px"
          display="flex"
          justifyContent="center"
        >

          <Image p='10px 8px'  src={machine} />

          {/* <Image
            position="absolute"
            zIndex={1}
            left="0"
            bottom="0px"
            width="100px"
            height="100px"
            src="https://static.vecteezy.com/system/resources/thumbnails/030/347/569/small_2x/ai-generated-image-of-delicious-popcorn-on-a-transparent-background-free-png.png"
            alt=""
          />
          <Image
            position="absolute"
            right="0.5rem"
            bottom="8px"
            width="130px"
            height="117px"
            src={camera}
            alt=""
          /> */}
        </Box>

      </Box>
      {/* <Icon
        className={style.sunIcon}
        width='150px'
        height='150px'
        position='absolute'
        top='8rem'
        right='14.5rem'
        zIndex={2}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
      >
        <path
          d="m20.5 59.7 7-7.2c-2.5-.5-4.8-1.5-6.9-2.9zm23-55.4-7 7.2c2.5.5 4.8 1.5 6.9 2.9zm-39.2 39.2 10.1-.1c-1.4-2.1-2.4-4.4-2.9-6.9zm55.4-23-10.1.1c1.3 2.1 2.3 4.4 2.9 6.9zm-55.4 0 7.2 7c.5-2.5 1.5-4.8 2.9-6.9zm55.4 23-7.2-7c-.5 2.5-1.5 4.8-2.9 6.9zm-39.2-39.2.1 10.1c2.1-1.3 4.4-2.3 6.9-2.9zm23 55.4-.1-10.1c-2.1 1.4-4.4 2.4-6.9 2.9z"
          fill="#ffe62e"
        />
        <g fill="#ffce31">
          <path d="m14.8 44-4 9.3 9.3-4c-2.1-1.5-3.9-3.3-5.3-5.3m34.4-24 4-9.3-9.2 4c2 1.5 3.8 3.3 5.2 5.3m-37.8 8.3-9.4 3.7 9.4 3.7c-.3-1.2-.4-2.4-.4-3.7s.1-2.5.4-3.7m41.2 7.4 9.4-3.7-9.4-3.7c.2 1.2.4 2.5.4 3.7 0 1.3-.1 2.5-.4 3.7m-32.6-20.9-9.3-4 4 9.3c1.5-2.1 3.3-3.9 5.3-5.3m24 34.4 9.3 4-4-9.3c-1.5 2.1-3.3 3.9-5.3 5.3m-8.3-37.8-3.7-9.4-3.7 9.4c1.2-.2 2.5-.4 3.7-.4s2.5.1 3.7.4m-7.4 41.2 3.7 9.4 3.7-9.4c-1.2.3-2.4.4-3.7.4s-2.5-.1-3.7-.4" />
          <circle cx="32" cy="32" r="19" />
        </g>
      </Icon> */}
      <Icon
        className={style.animatedIcon}
        zIndex={1}
        top="5rem"
        right="5rem"
        position="absolute"
        xmlns="http://www.w3.org/2000/svg"
        height="100"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 128 218"
        width=""
      >
        <g fillRule="evenodd">
          <path
            d="m127.04 63.145c0 34.867-63.131 88.36-63.131 88.36s-63.131-53.493-63.131-88.36 28.265-63.133 63.131-63.133c34.867 0 63.131 28.266 63.131 63.133z"
            fill="#fbb713"
          />
          <path
            d="m63.909 151.505s63.131-53.493 63.131-88.36-28.264-63.133-63.131-63.133c0 0-2.521 1.827-2.521 1.827 21.682 6.781 37.764 31.657 37.764 61.306 0 23.231-22.053 68.583-36.772 87.02 0 0 1.529 1.34 1.529 1.34z"
            fill="#ff3a2f"
          />
          <path
            d="m92.546 6.931c13.58 11.579 22.219 28.784 22.219 48.03 0 31.508-51.543 78.215-61.476 86.925 6.326 5.974 10.62 9.619 10.62 9.619s63.131-53.493 63.131-88.36c0-24.546-14.037-45.77-34.494-56.214z"
            fill="#020403"
            opacity=".35"
          />
          <path
            d="m63.14 151.505s-63.131-53.493-63.131-88.36 28.265-63.133 63.131-63.133c0 0 2.52 1.827 2.52 1.827-21.681 6.781-37.763 31.657-37.763 61.306 0 23.231 22.053 68.583 36.771 87.02 0 0-1.528 1.34-1.528 1.34z"
            fill="#0cb04a"
          />
          <path
            d="m16.414 71.203c-1.51 0-2.918-.953-3.427-2.465-1.341-4.001-2.023-7.776-2.023-11.226 0-15.965 7.013-31.023 19.237-41.313 1.522-1.284 3.806-1.09 5.093.439 1.284 1.527 1.089 3.806-.438 5.093-10.589 8.912-16.663 21.955-16.663 35.781 0 2.666.555 5.668 1.647 8.925.636 1.892-.383 3.941-2.274 4.577-.382.128-.77.189-1.152.189z"
            fill="#fff"
          />
          <path
            d="m63.141 162.625c-1.997 0-3.615-1.619-3.615-3.615v-7.505c0-1.996 1.618-3.615 3.615-3.615 1.996 0 3.615 1.619 3.615 3.615v7.505c0 1.996-1.619 3.615-3.615 3.615z"
            fill="#142a3b"
          />
          <path d="m92.849 216.892h-57.88v-57.882h57.88z" fill="#142a3b" />
          <path
            d="m76.481 159.01v57.882h16.368v-57.882z"
            fill="#020403"
            opacity=".35"
          />
        </g>
      </Icon>

      {/* <Image
        position="absolute"
        right="18rem"
        top="14rem"
        src={"https://www.transparentpng.com/thumb/luggage/keOhnv-simple-luggage-transparent-background.png"}
      /> */}
    </Box>
  );
}

export default WebImage;
