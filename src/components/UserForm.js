import React from 'react';
import { useForm } from 'react-hook-form';

import {
	Box,
	Button,
	Center,
	Container,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Heading,
	Input,
} from '@chakra-ui/react';

// regex pattern found from https://www.w3resource.com/javascript/form/email-validation.php
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// regex pattern found from stackoverflow
const SPECIAL_CHAR_REGEX = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/;


export default function UserForm () {
	const { register, handleSubmit, errors, formState, getValues, reset } = useForm();

	function onSubmit (data) {
		// should be updated with toast message
		alert('User Created!');
		reset();
	}

	function validateEmail (value) {
		if (!value) {
			return 'Email Address is required.'
		}

		if (!value.match(EMAIL_REGEX)) {
			return 'Please enter a valid email address.';
		}

		return true;
	}

	function validatePassword (value) {
		let error;
		
		// return early to show required error first
		if (!value) {
			return 'Password is required.';
		}

		if (value.length <= 8) {
			error = 'Password must be longer than 8 characters.'
		}

		if (!value.match(/\d/)) {
			error = 'Password must have a number.'
		}

		if (!value.match(SPECIAL_CHAR_REGEX)) {
			error = 'Password must have a special character.'
		}

		return error || true;
	}

	function validateReEntryPassword (value, allValues) {
		if (!value) {
			return 'Password is required.';
		}

		if (value !== allValues().password) {
			return 'Passwords do not match.'
		}

	}


	return (
		<Center>
			<Box minW="md" minH="full" maxH="full" borderWidth="1px" borderRadius="lg"
				 p={5} shadow="lg" bg="gray.50">
				<Container centerContent>
					<Heading as='h1'>
						You're Approved!
					</Heading>
					<Heading as='h2'>
						Create An Account
					</Heading>
				</Container>
				<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl isInvalid={errors.email}>
							<FormLabel alignItems="center">
								<Input name="email"
											 type="email" 
											 variant="flushed" 
											 ref={register({ validate: validateEmail })}/>
								Email
							</FormLabel >
							<FormErrorMessage>
								{errors.email?.message}
							</FormErrorMessage>
						</FormControl>
						<FormControl isInvalid={errors.password}>
							<FormLabel alignItems="center">
								<Input name="password"
											 type="password" 
											 variant="flushed" 
											 ref={register({ validate: validatePassword })}/>
								Password
							</FormLabel >
							<FormHelperText>Password must be more than 8 characters with a number and a special character.</FormHelperText>
							<FormErrorMessage>
								{errors.password?.message}
							</FormErrorMessage>
						</FormControl>
						<FormControl isInvalid={errors.passwordReEntry}>
							<FormLabel alignItems="center">
								<Input name="passwordReEntry"
											 type="password" 
											 variant="flushed" 
											 ref={register({ validate: (value) => validateReEntryPassword(value, getValues)})}/>
								Re-Enter Password
							</FormLabel >
							<FormErrorMessage>
								{errors.passwordReEntry?.message}
							</FormErrorMessage>
						</FormControl>
						<Button alignItems="center"
										className="investor-form-submit-button"
										colorScheme="teal"
										isLoading={formState.isSubmitting}
										loadingText="Submitting"
										mt={5}
										size="md"
										type="submit"
										width="50%">
								Submit
						</Button>
				</form>
			</Box>
		</Center>
	)
}