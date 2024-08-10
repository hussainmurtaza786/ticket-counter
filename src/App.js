import { Box, ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header-Navbar/Header';

function App() {
  return (
    <ChakraProvider>
      <Box >
        <Header />
      </Box>

    </ChakraProvider>
  );
}

export default App;
