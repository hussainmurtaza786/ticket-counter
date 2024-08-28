import Plane from "./Plane";
import Bus from './Bus'
import Train from './Train'
import { useState } from "react";
import { Box, CloseButton, FormControl, FormLabel, Select } from "@chakra-ui/react";
function Transportation({ onClose }) {
  const [selectedTransport, setSelectedTransport] = useState('plane');

  const renderForm = () => {
    switch (selectedTransport) {
      case 'plane':
        return <Plane selectedTransport={selectedTransport} onClose={onClose} />;
      case 'bus':
        return <Bus selectedTransport={selectedTransport} onClose={onClose} />;
      case 'train':
        return <Train selectedTransport={selectedTransport} onClose={onClose} />;
      default:
        return null;
    }
  };

  return (
    <Box display='flex' flexDirection='column' width='500px' height='100%' bgColor='whitesmoke' p='20px' boxShadow='xl' borderRadius='md'>
      <CloseButton onClick={() => onClose(false)} fontSize='20px' color='red'>X</CloseButton>
      
      <Box display='flex' flexDirection='column' alignItems='center' marginBottom='20px'>
        <label style={{ margin: '15px 8px', fontSize: '30px', fontWeight: 'bold' }}>
          Select Transportation Type
        </label>
      
        <FormControl mb={4}>
          <FormLabel>Select Transport</FormLabel>
          <Select value={selectedTransport} onChange={(e) => setSelectedTransport(e.target.value)}>
            <option value="plane">Plane</option>
            <option value="train">Train</option>
            <option value="bus">Bus</option>
          </Select>
        </FormControl>
      </Box>

      {renderForm()}
    </Box>
  );
}

export default Transportation