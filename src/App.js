import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header-Navbar/Header';
import Home from './components/Link-Component/Home';

function App() {
  return (
    <ChakraProvider>
      <Flex display='flex' flexDirection='column' >
        <Header />
        <Home/>
      </Flex>

    </ChakraProvider>
  );
}

export default App;
