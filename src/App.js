import { ChakraProvider, Flex } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Review from './Review/Review';
import Home from './components/home-page/Home';

function App() {
  return (
    <ChakraProvider>
      <Flex width="100%" zIndex={1} bgColor="#64b9f" direction="column" >
        <Navbar />
        <Home />
      </Flex>

      <Review />
    </ChakraProvider>
  );
}

export default App;
