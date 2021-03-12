import React from 'react';

import InvestorForm from '../components/InvestorForm';
import MarketingCopy from '../components/MarketingCopy';

import {
    Center,
    Flex,
    Spacer,
} from "@chakra-ui/react";
import UserRegistration from './UserRegistration';

export default function Home () {
    return (
        <Center minHeight='40vh'>
            <MarketingCopy />
            <InvestorForm />
            {/* <UserRegistration></UserRegistration> */}
        </Center>
    )
}