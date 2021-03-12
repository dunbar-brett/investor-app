import React from 'react';
import '../App.css';

import {
    Box,
    Center,
    Flex,
    Heading,
    Text
} from '@chakra-ui/react';

export default function Disqualified (props) {
    const message = props.location.state.message;

    return (
        <Center>
            <Box minH='20vh' maxW="xl" borderWidth="1px" borderRadius="lg"
                    p={5} shadow="lg" bg="gray.50" maxH="full">
                <Flex direction='column' justify='start' alignItems='center'>
                    <Heading as="h1">
                        We're sorry to say...
                    </Heading>
                    <Text fontSize="2xl" py='2rem'>
                        {message}
                    </Text>
                    <Text fontSize="2xl" align='center'>
                        Please <a href="tel:5554280940">contact customer service</a> for more information.
                    </Text>
                </Flex>
            </Box>
        </Center>
    )
}