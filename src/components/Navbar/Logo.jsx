import { Box } from '@chakra-ui/react'
import React from 'react'

function Logo() {
    return (
        <div>
            <Box
                fontSize="36px"
                fontWeight="bold"
                m="10px 30px"
                color="#FF4500"
                fontFamily={"'Open Sans', 'Raleway', sans-serif'"}
                textShadow="2px 2px 10px rgba(0, 0, 0, 0.7)"
                borderRadius="10px"
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)"
            >
                Ticket Counter
            </Box>
        </div>
    )
}

export default Logo