import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import styles from './expence.module.css'
import TransActionForm from './TransActionForm'

function OverViewComponent({ income, expense, addTransActions }) {

    const [isShow, setIsShow] = useState(false)

    return (
        <div>
            <div className={styles.expenseTop}>
                <h2>Balance : {income - expense}</h2>
                <Button variant="contained" color={isShow ? "secondary" : "primary"} className={styles.btn} onClick={() => setIsShow(!isShow)} >{isShow ? "Cancel" : "Add"}</Button>
            </div>

            {isShow && (<TransActionForm
                addTransActions={addTransActions}
                setIsShow={setIsShow}
                isShow={isShow}
            />)}

            <div className={styles.expenseEnd}>
                <h4>Expense {expense}$</h4>
                <h4>Income {income}$</h4>
            </div>
        </div>
    )
}

export default OverViewComponent
