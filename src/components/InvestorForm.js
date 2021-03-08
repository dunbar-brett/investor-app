import React from 'react';
import PropTypes from 'prop-types'

import { useForm } from 'react-hook-form'


export default function InvestorForm (props) {
    const {register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => alert(JSON.stringify(data));


    return (
        <div>
            <h1>Please Enter Info Below</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Investment Amount
                    <input name="investmentAmount" type="number" ref={register({required: "Investment Amount is required."})}/>
                    {errors.investmentAmount?.message}
                </label>
                <br/>
                <label>
                    Investment Type
                    <input name="investmentType" type="text" ref={register({required: "Investment Type is required."})}/>
                    {errors.investmentType?.message}
                </label>
                <br/>
                <label>
                    Total Net Worth
                    <input name="totalNetWorth" type="number" ref={register({required: true})}/>
                    {errors.estimatedYearlyIncome?.message}
                </label>
                <br/>
                <label>
                    Estimated Yearly Income
                    <input name="estimatedYearlyIncome" type="number" ref={register({required: "Estimated Yearly Income is required."})}/>
                    {errors.estimatedYearlyIncome?.message}
                </label>
                <br/>
                <label>
                    Estimated Credit Score
                    <input name="estimatedCreditScore" type="number"
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
                    {errors.estimatedCreditScore?.message}
                </label>
                <br/>
                <input type="submit" />
            </form>

        </div>
    )
}