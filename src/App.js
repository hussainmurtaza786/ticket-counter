import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import './App.css';

import Navbar from './components/Navbar/Navbar';

import Review from './Review/Review';
import Home from './components/home-page/Home';
import SlidingBox from './components/UI/SlidingBox';
import Data from './components/ShowFetchData/Data';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchmovieData, sendMovieData } from './store/movie-action';
import Notification from './components/UI/Notification';


function App() {
  let isInitial = true

  const movieData = useSelector((state) => state.data.fetchData);

  const dispatch = useDispatch()
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notitfication = useSelector(state => state.ui.notification)


  // useEffect(() => {
  //   dispatch(fetchmovieData())
  // }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (movieData.changed) {
      dispatch(sendMovieData(movieData))
    }

  }, [movieData, dispatch])

  return (
    <ChakraProvider>
       {notitfication && <Notification
        status={notitfication.status}
        title={notitfication.title}
        message={notitfication.message} />}
      <Flex width='100%' zIndex={1} height='100vh' bgColor="#64b9f" direction='column'  >
        <Navbar />
        <Home />
      </Flex>
      <SlidingBox />
      {movieData && <Data />}
      <Review />
    </ChakraProvider>
  );
}

export default App;
