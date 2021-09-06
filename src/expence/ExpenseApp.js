import React, { useEffect, useState } from 'react'
import styles from './expence.module.css'
import MainExpense from './MainExpense'
import HashLoader from 'react-spinners/HashLoader'

function ExpenseApp() {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setInterval(() => {
            setLoading(false)
        }, 5000);
    }, [])

    return (
        <div className={styles.app}>
            {loading ?
                <div style={{
                    background: '#D1D5DB', padding: '16rem 39rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px'
                }}>
                    <HashLoader
                        color={"#D97706"}
                        size={75}
                    />

                </div>
                :
                (
                    <div>
                        <h1>Expence Tracker</h1>
                        <MainExpense />
                    </div>
                )
            }

        </div >
    )
}

export default ExpenseApp
