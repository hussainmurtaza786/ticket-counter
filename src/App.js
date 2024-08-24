import { ChakraProvider, Flex } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import Home from './components/home-page/Home';
import Review from './components/ReviewPage';
import FetchData from './components/FetchData';
import { useSelector } from 'react-redux';


function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <ChakraProvider>

      <Flex width="100%" zIndex={1} bgColor="#64b9f" direction="column" >
        <Navbar />
        <Home />
      </Flex>

      {isAuthenticated && <FetchData />}
      <Review />
    </ChakraProvider>
  );
}

export default App;
