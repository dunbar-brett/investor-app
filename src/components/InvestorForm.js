import React from 'react';
import '../App.css';
import { useForm } from 'react-hook-form';
import { navigate } from '@reach/router';
import InvestorService from '../services/InvestorService';

import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
  } from '@chakra-ui/react';

export default function InvestorForm (props) {
    const {register, handleSubmit, errors, formState } = useForm();

    async function onSubmit (data) {
        const payload = {
            investmentAmount: data.investmentAmount,
            investmentType: data.investmentType,
            totalNetWorth: data.totalNetWorth,
            estimatedCreditScore: data.estimatedCreditScore,
            estimatedYearlyIncome: data.estimatedYearlyIncome
        };
        
        try {
            const investmentServiceResponse = await InvestorService.calculate(payload);

            if (investmentServiceResponse.status === 200) {
							console.log('Success');
							console.log(investmentServiceResponse)
							if (investmentServiceResponse.approved) {
								console.log('approved');
								navigate('/userRegistration');
							} else {
								console.log('declined');
								// disqualified
								navigate('/disqualified', {state: {message: investmentServiceResponse.message}}); 
							}
            } else if (investmentServiceResponse.status === 400) {
							console.log('investment more than 9000000');
							alert('investment more than 9000000');
						}
        } catch (error) {
					console.error(error)
					alert(error.message);
        }
    }

    return (
        <Center>
            <Box minW="md" minH="full" maxH="full" borderWidth="1px" borderRadius="lg"
                 p={5} shadow="lg" bg="gray.50">
                <Heading as="h1" className="investor-form-header">
                    Investor Application Form
                </Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={errors.investmentAmount}>
                        <FormLabel alignItems="center">
                            <InputGroup>
                                <InputLeftElement pointerEvents="none"
                                    color="gray"
                                    fontSize="1.2em"
                                    children="$"/>
                                <Input name="investmentAmount" type="number" variant="flushed" ref={register({required: "Investment Amount is required."})}/>
                            </InputGroup>
                            Investment Amount
                        </FormLabel >
                        <FormErrorMessage>
                            {errors.investmentAmount?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.investmentType}>
                        <FormLabel >
                            <Input name="investmentType" type="text" variant="flushed" ref={register({required: "Investment Type is required."})}/>
                            Investment Type
                        </FormLabel >
                        <FormErrorMessage>
                            {errors.investmentType?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.totalNetWorth}>
                        <FormLabel >
                            <InputGroup>
                                <InputLeftElement pointerEvents="none"
                                    color="gray"
                                    fontSize="1.2em"
                                    children="$"/>
                                <Input name="totalNetWorth" type="number" variant="flushed" ref={register({required: "Total Net Worth is required."})}/>
                            </InputGroup>
                            Total Net Worth
                        </FormLabel >
                        <FormErrorMessage>
                            {errors.totalNetWorth?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.estimatedYearlyIncome}>    
                        <FormLabel >
                            <InputGroup>
                                <InputLeftElement pointerEvents="none"
                                    color="gray"
                                    fontSize="1.2em"
                                    children="$"/>
                                <Input name="estimatedYearlyIncome" type="number" variant="flushed" ref={register({required: "Estimated Yearly Income is required."})}/>
                            </InputGroup>
                            Estimated Yearly Income
                        </FormLabel >
                        <FormErrorMessage>
                            {errors.estimatedYearlyIncome?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.estimatedCreditScore}>
                        <FormLabel >
                            <Input name="estimatedCreditScore" type="number" variant="flushed"
                                ref={register({
                                    required: "Estimated Credit Score is required", 
                                    min: {
                                        value: 300,
                                        message: "Minimum credit score is 300."
                                    }, 
                                    max: {
                                        value: 850,
                                        message: "Maximum credit score is 850."
                                    }
                                })
                            }/>
                            Estimated Credit Score
                        </FormLabel >
                        <FormErrorMessage>
                            {errors.estimatedCreditScore?.message}
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