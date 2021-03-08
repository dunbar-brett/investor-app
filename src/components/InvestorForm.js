import React from 'react';

import { useForm } from 'react-hook-form';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
  } from "@chakra-ui/react"

export default function InvestorForm (props) {
    const {register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => alert(JSON.stringify(data));


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <FormLabel >
                        Investment Amount
                        <Input name="investmentAmount" type="number" ref={register({required: "Investment Amount is required."})}/>
                    </FormLabel >
                    <FormErrorMessage>
                        {errors.investmentAmount?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl>
                    <FormLabel >
                        Investment Type
                        <Input name="investmentType" type="text" ref={register({required: "Investment Type is required."})}/>
                    </FormLabel >
                    <FormErrorMessage>
                        {errors.investmentType?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl>
                    <FormLabel >
                        Total Net Worth
                        <Input name="totalNetWorth" type="number" ref={register({required: true})}/>
                    </FormLabel >
                    <FormErrorMessage>
                        {errors.estimatedYearlyIncome?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl>    
                    <FormLabel >
                        Estimated Yearly Income
                        <Input name="estimatedYearlyIncome" type="number" ref={register({required: "Estimated Yearly Income is required."})}/>
                    </FormLabel >
                    <FormErrorMessage>
                        {errors.estimatedYearlyIncome?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl>
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
                <Input type="submit" />
            </form>
        </div>
    )
}