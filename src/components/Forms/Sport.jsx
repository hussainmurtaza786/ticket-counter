import React, { useState } from 'react';
import { Box, Button, Flex, Image, FormControl, FormLabel, Input, VStack, Radio, RadioGroup, CloseButton, Select } from '@chakra-ui/react';
import Cricket from './Cricket'
import FootBall from './FootBall'
import Tennis from './Tennis'

function Sport({ onClose }) {
  const [selectedSport, setSelectedSport] = useState('cricket');

  const renderForm = () => {
    switch (selectedSport) {
      case 'cricket':
        return <Cricket  onClose={onClose} selectedSport={selectedSport} />;
      case 'football':
        return <FootBall onClose={onClose} selectedSport={selectedSport} />;
      case 'tennis':
        return <Tennis onClose={onClose} selectedSport={selectedSport} />;
      default:
        return null;
    }
  };

  return (
    <Box display='flex' flexDirection='column' width='500px' height='100%' bgColor='whitesmoke' p='20px' boxShadow='xl' borderRadius='md'>
      <CloseButton onClick={() => onClose(false)} fontSize='20px' color='red'>X</CloseButton>

      <FormControl mb={4}>
        <FormLabel>Select Sport</FormLabel>
        <Select value={selectedSport} onChange={(e) => setSelectedSport(e.target.value)}>
          <option value="cricket">Cricket</option>
          <option value="football">Football</option>
          <option value="tennis">Tennis</option>
        </Select>
      </FormControl>

      {renderForm()}
    </Box>
  );
}




export default Sport;
