import { ChakraProvider, Flex, Text } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home-page/Home';
import FetchData from './components/FetchData';
import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ReviewPage from './components/ReviewPage';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Outlet />
          
        </>
      ),
      children: [
        
        { path: '/', element: <Home />,  errorElement:<Text>No such page can be found</Text>},
        { path: '/review', element: <ReviewPage /> },
        {
          path: '/ticket', element: isAuthenticated ? <FetchData /> : <Text display='flex' fontSize='30px' fontWeight='bold' justifyContent='center' alignItems='center'>
            Please Sign in to show Ticket
          </Text>
        },
        { path: '/contact', element: <div>Contact Page</div> },
        { path: '/about', element: <div>About Page</div> },
      ],
    },
  ]);


  return (
    <ChakraProvider>
      <RouterProvider router={router} />

    </ChakraProvider>
  );
}

export default App;
