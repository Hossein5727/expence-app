import { Button } from '@material-ui/core'
import React from 'react'
import styles from './expence.module.css'

function TransItems({ item, deleteHandler }) {
    return (
        <div>
            <div key={item.id} className={styles.mapAction} style={{ borderRight: item.type === "expense" ? "5px solid #1D4ED8" : "5px solid #DC2626" }}>
                <h2>Your Description: {item.desc}</h2>
                <h2>Your Price: ${item.amount}</h2>
                <Button variant="contained" color="secondary" onClick={() => deleteHandler(item.id, item.amount)}>Delete</Button>
                <hr />
            </div>
        </div>
    )
}

export default TransItems
