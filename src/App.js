import { Box, ChakraProvider, Text } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home-page/Home';
import FetchData from './components/FetchData';
import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState } from 'react';
import ReviewPage from './components/Pages/ReviewPage';

function App() {
  const [formType, setFormType] = useState("");

  const showForm = (_formType) => setFormType(_formType);

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Navbar showForm={showForm} />
          <Box flex="1">
            <Outlet />
          </Box>
        </Box>
      ),
      children: [
        { path: '/', element: <Home showForm={showForm} setFormType={setFormType} formType={formType} /> },
        { path: '/review', element: <ReviewPage /> },
        {
          path: '/ticket',
          element: isAuthenticated
            ? <FetchData />
            : <Text display='flex' fontSize='30px' fontWeight='bold' justifyContent='center'  alignItems='center'>
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
      <Box  p={0} m={0}>
        <RouterProvider router={router} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
