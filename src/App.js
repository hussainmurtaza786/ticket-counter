import { Box, ChakraProvider, Heading, Highlight, Text } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home-page/Home';
import Ticket from './components/Pages/TicketPage'
import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState } from 'react';
import ReviewPage from './components/Pages/ReviewPage';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import Form from './components/Forms/Form';

function App() {
  const [formType, setFormType] = useState("");

  const showForm = (_formType) => setFormType(_formType);
  const onClose = () => setFormType("");


  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <Navbar showForm={showForm} />
            <Box flex="1">
              <Outlet />
            </Box>
          </Box>
          <Box position="relative" zIndex="100">
            {formType && <Form onClose={onClose} formType={formType} />}
          </Box>
        </>
      ),
      children: [
        { path: '/', element: <Home showForm={showForm} setFormType={setFormType} formType={formType} /> },
        { path: '/review', element: <ReviewPage /> },
        {
          path: '/ticket',
          element: isAuthenticated
            ? <Ticket />
            : <Text display='flex' fontSize='30px' fontWeight='bold' height='600px' justifyContent='center' alignItems='center'>
              <Heading lineHeight='tall' userSelect='none'>
                <Highlight
                  query='Please Sign in to show Ticket'
                  styles={{ px: '2', py: '1', rounded: 'full', bg: 'blue.400' }}
                >
                  Please Sign in to show Ticket

                </Highlight>
              </Heading>
            </Text>
        },
        { path: '/contact', element: <Contact /> },
        { path: '/about', element: <About /> },
      ],
    },
  ]);


  return (
    <ChakraProvider>
      <Box p={0} m={0}>
        <RouterProvider router={router} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
