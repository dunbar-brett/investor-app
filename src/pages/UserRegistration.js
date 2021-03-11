import React from 'react';

import {
    Center
} from '@chakra-ui/react';

import UserForm from '../components/UserForm';


export default function UserRegistration () {
    return (
        <Center minH='40vh'>
            <UserForm></UserForm>
        </Center>
    )
}