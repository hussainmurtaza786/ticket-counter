import React from 'react';
import Movie from './Movie';
import { Box } from '@chakra-ui/react';
import Modal from '../UI/Modal';
import Flight from './Flight';
import Sport from './Sport';

function Form({ formType, showMovie }) {

    return (
        formType && <Modal  >
            <Box display='flex' justifyContent='center' alignItems='center' m='8rem 0rem'>
                {formType === 'Movie' && <Movie onClose={showMovie} />}
                {formType === 'Flight' && <Flight onClose={showMovie} />}
                {formType === 'Sports' && <Sport onClose={showMovie} />}

            </Box>
        </Modal >
    );
}

export default Form;
