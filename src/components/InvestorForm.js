import React from 'react';

import { useForm } from 'react-hook-form';

import {
    Container,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Heading,
    Input,
    Button,
  } from "@chakra-ui/react"

export default function InvestorForm (props) {
    const {register, handleSubmit, errors, formState } = useForm();

    const onSubmit = (data) => alert(JSON.stringify(data));

    return (
        <div>
            <Container centerContent>
                <Heading as="h1">Investor Application Form</Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={errors.investmentAmount}>
                        <FormLabel >
                            Investment Amount
                            <Input name="investmentAmount" type="number" ref={register({required: "Investment Amount is required."})}/>
                        </FormLabel >
                        <FormErrorMessage>
                            {errors.investmentAmount?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.investmentType}>
                        <FormLabel >
                            Investment Type
                            <Input name="investmentType" type="text" ref={register({required: "Investment Type is required."})}/>
                        </FormLabel >
                        <FormErrorMessage>
                            {errors.investmentType?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.totalNetWorth}>
                        <FormLabel >
                            Total Net Worth
                            <Input name="totalNetWorth" type="number" ref={register({required: "Total Net Worth is required."})}/>
                        </FormLabel >
                        <FormErrorMessage>
                            {errors.totalNetWorth?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.estimatedYearlyIncome}>    
                        <FormLabel >
                            Estimated Yearly Income
                            <Input name="estimatedYearlyIncome" type="number" ref={register({required: "Estimated Yearly Income is required."})}/>
                        </FormLabel >
                        <FormErrorMessage>
                            {errors.estimatedYearlyIncome?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.estimatedCreditScore}>
                        <FormLabel >
                            Estimated Credit Score
                            <Input name="estimatedCreditScore" type="number"
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
                        </FormLabel >
                        <FormErrorMessage>
                            {errors.estimatedCreditScore?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <Button colorScheme="teal"
                            isLoading={formState.isSubmitting}
                            loadingText="Submitting"
                            size="md"
                            type="submit"
                            width="full">
                        Submit
                    </Button>
                </form>
            </Container>
        </div>
    )
}