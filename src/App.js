import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Header-Navbar/Navbar';
import Home from './components/Link-Component/Home';

function App() {
  return (
    <ChakraProvider>
      <Flex direction='column'  >
        <Navbar />
        <Home />
      </Flex>

    </ChakraProvider>
  );
}

export default App;
