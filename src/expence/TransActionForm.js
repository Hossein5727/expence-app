import { Button, FormControlLabel, FormGroup, Radio, RadioGroup, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styles from './expence.module.css'

function TransActionForm({ addTransActions, isShow, setIsShow }) {

    const [formValues, setFormValues] = useState({
        type: 'expense',
        amount: Number,
        desc: ""
    })

    const changeHandler = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
        console.log(formValues);
    }

    const submitHandler = (e) => {
        e.preventDefault()
        addTransActions(formValues)
        setIsShow(false)
    }


    return (
        <div className={styles.transForm}>
            <form onSubmit={submitHandler}>
                <FormGroup>
                    <TextField
                        variant="filled"
                        name="desc"
                        value={formValues.desc}
                        onChange={changeHandler}
                        inputProps={{ maxLength: 12 }}
                        required={true}
                        label="description"
                    />
                    <TextField
                        variant="filled"
                        color="secondary"
                        type="number"
                        name="amount"
                        value={formValues.amount}
                        onChange={changeHandler}
                        required={true}
                        label="amount"
                    />
                    <div>
                        <RadioGroup aria-label="gender" name="gender1"  >
                            <FormControlLabel control={<Radio color="primary" onChange={changeHandler} name="type" checked={formValues.type == "expense"} value="expense" />} label="expense" />
                            <FormControlLabel control={<Radio onChange={changeHandler} name="type" checked={formValues.type == "income"} value="income" />} label="income" />
                        </RadioGroup>
                    </div>
                    <Button variant="contained" color="primary" type="submit" >Add TransAction</Button>
                </FormGroup>
            </form>
        </div>
    )
}

export default TransActionForm
