import { StarIcon } from '@chakra-ui/icons';
import { Button, Flex, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import React from 'react';

function Review({ email, rating, text, handleRatingChange, handleSubmit, handleInputChange }) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormControl mb="1rem" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" name="email" value={email} onChange={handleInputChange} />
                </FormControl>
                <FormControl mb="1rem" isRequired>
                    <FormLabel>Review</FormLabel>
                    <Textarea name="text" value={text} onChange={handleInputChange} />
                </FormControl>
                <FormControl mb="1rem">
                    <FormLabel>Rating</FormLabel>
                    <Flex>
                        {Array(5).fill("").map((_, i) => (
                            <StarIcon key={i} color={i < rating ? "yellow.500" : "gray.300"} cursor="pointer"
                                onClick={() => handleRatingChange(i + 1)}
                            />
                        ))}
                    </Flex>
                </FormControl>
                <Button type="submit" colorScheme="blue">Submit Review</Button>
            </form>
        </div>
    );
}

export default Review;
