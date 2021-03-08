import React from 'react';
import PropTypes from 'prop-types'

import { useForm } from 'react-hook-form'


export default function InvestorForm (props) {
    const {register, handleSubmit, errors } = useForm();

    const onSubmit = data => alert(JSON.stringify(data));


    return (
        <div>
            <h1>Please Enter Info Below</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"/>
            </form>

        </div>
    )
}