import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

function Message() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <Box width="100%" >
            <Flex justify="center" align="center" >
                {!isAuthenticated && (
                    <Box
                        bg="red.100"
                        border="1px solid"
                        borderColor="red.300"
                        borderRadius="md"
                        width={{ base: '90%', md: '100%' }}
                        textAlign="center"
                        boxShadow="sm"
                    >
                        <Text
                            color="red.700"
                            fontSize="lg"
                            fontWeight="bold"
                            userSelect="none"
                        >
                            Please Sign in to book a ticket.
                        </Text>
                    </Box>
                )}
            </Flex>
        </Box>
    );
}

export default Message;
