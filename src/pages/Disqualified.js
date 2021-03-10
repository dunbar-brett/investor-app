import React from 'react';

import {
    Box,
    Center,
    Heading
} from '@chakra-ui/react';

export default function Disqualified () {
    return (
        <Center>
            <Box maxW="xl" borderWidth="1px" borderRadius="lg"
                 p={5} shadow="lg" bg="gray.50" maxH="full">
                <Heading as="h1">
                    We're sorry to say...
                </Heading>
                <Text>
                    Based on the information you gave us we can't qualify you at this time.
                </Text>
                <Text>
                    Please <a href="tel:5554280940">contact customer service</a> for more information.
                </Text>
            </Box>
        </Center>
    )
}