import { Box, Center, Flex, Image, Link, Text, } from '@chakra-ui/react'
import React from 'react'

function Header() {
  return (
    <Box position="relative">
      <Image
        top={0}
        position={'relative'}
        width='100vw'
        opacity={0.6}
        bgColor='blue'
        src='https://i.pinimg.com/originals/88/76/f7/8876f778a1fd115928430ec8d0532dd4.jpg'
      />

      <Box
        background='transparent'
        opacity='0.4'
        bgColor='black'
        height='70px'
        width='100%'
        position={'absolute'}
        top={0}
      >
        <Box fontSize='30px' color='white' m='17px'>
          Ticket Counter
        </Box>
      </Box>

      <Box m='10px' position='absolute' top={0} right={0} color={'whitesmoke'}>
        <Flex m='10px'>
          <Box mr={4}>
            <Link>Home</Link>
          </Box>
          <Box mr={4}>
            <Link>Contact</Link>
          </Box>
          <Box mr={4}>
            <Link>Ticket</Link>
          </Box>
          <Box mr={4}>
            <Link>About</Link>
          </Box>
        </Flex>
      </Box>

      <Box
        p={10}

        position={'absolute'}
        top='16rem'
        left='0'

      >
        <Text textDecoration={'underline'} opacity={0.9}
          fontSize='50px'  color={'#FF6347'}
          textShadow='3px 3px 6px rgba(0, 0, 0, 0.7)'>
          Get Tickets Effortlessly <br /> Online
        </Text>
        <Text  opacity={0.9} color={'#FF6347'} fontSize='20px'>Find and buy tickets for movies, trains, sports, and more in a <br /> secure way through our user-friendly platform.</Text>
      </Box>
    </Box>
  )
}

export default Header
