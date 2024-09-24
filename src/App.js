import { Box,  ChakraProvider, } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home-page/Home';
import Ticket from './components/Pages/TicketPage'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState } from 'react';
import ReviewPage from './components/Pages/ReviewPage';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import Form from './components/Forms/Form';
import BookTicket from './components/Pages/BookTicket'

function App() {
  const [formType, setFormType] = useState("");

  const showForm = (_formType) => setFormType(_formType);
  const onClose = () => setFormType("");


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
          element: < Ticket />



        },
        { path: '/contact', element: <Contact /> },
        { path: '/about', element: <About /> },
        { path: '/bookTicket', element: <BookTicket /> },
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
