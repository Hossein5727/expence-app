import styles from './todo.module.css'

import { Button } from '@material-ui/core'
import { useState } from 'react'

function Todo({ item, onDelete, onEdit, onComplete }) {

    return (
        <div>
            <div key={item.id} className={`text-center m-3 alert-warning p-3 rounded-2 ${styles.parent}`} >
                <h1 onClick={onComplete} className={item.isComplete ? styles.lineTrogh : styles.pointer}> {item.text} </h1>
                <br />
                <Button onClick={onEdit} className="m-2" variant="contained" color="primary">Edit</Button>
                <Button onClick={onDelete} className="m-2" variant="contained" color="secondary">Delete</Button>
            </div>
        </div >
    )
}

export default Todo
