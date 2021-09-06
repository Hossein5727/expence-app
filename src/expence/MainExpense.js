import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styles from './expence.module.css'
import OverViewComponent from './OverViewComponent'
import TransAtionsComponent from './TransAtionsComponent'

function MainExpense() {

    const [expense, setExpense] = useState(0)
    const [income, setIncome] = useState(0)
    const [transations, setTransations] = useState([])

    const addTransActions = (formValue) => {
        console.log(formValue);
        const data = { ...formValue, id: Date.now() }
        setTransations([...transations, data])
        console.log(transations);
    }

    useEffect(() => {
        let exp = 0;
        let inc = 0;
        transations.forEach((trans) => {
            trans.type === "expense" && trans.amount != null ? (exp = exp + parseFloat(trans.amount)) : (inc = inc + parseFloat(trans.amount))
        })
        setExpense(exp)
        setIncome(inc)
    }, [transations])

    return (
        <section className={styles.expense}>

            <OverViewComponent
                income={income}
                expense={expense}
                addTransActions={addTransActions}
            />

            <TransAtionsComponent
                transations={transations}
                setTransations={setTransations}
            />

        </section>
    )
}

export default MainExpense
