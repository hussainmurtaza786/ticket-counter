import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import './App.css';

import Navbar from './components/Navbar/Navbar';

import Review from './Review/Review';
import Home from './components/home-page/Home';


function App() {

  return (
    <ChakraProvider>
      <Flex width='100%' zIndex={1} height='100vh' bgColor="#64b9f1" direction='column'  >
        <Navbar />
        <Home/>
      </Flex>

      <Review />
    </ChakraProvider>
  );
}

export default App;
