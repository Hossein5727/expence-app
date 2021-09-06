import React, { useEffect, useState } from 'react'
import styles from './expence.module.css'
import { Button, FormGroup, TextField } from '@material-ui/core'
import TransItems from './TransItems'

function TransAtionsComponent({ transations, setTransations }) {

    const [searchValue, setSearchValue] = useState("")


    const deleteHandler = (id) => {
        const cloneTrans = [...transations]
        const deleteItems = cloneTrans.filter(t => t.id !== id)
        setTransations(deleteItems)
    }



    return (
        <div >
            <div className={styles.searchBtn}>
                {transations && transations.length ? (
                    <TextField
                        variant="filled"
                        label="seaarch..."
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                        className="w-75"
                    />
                ) : null}
            </div>
            {transations && transations.filter((item) => {
                if (searchValue == "") {
                    return item
                } else if (item.desc.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                    return item
                }
            }).map((item) => {
                return (
                    <div>
                        <TransItems
                            deleteHandler={deleteHandler}
                            item={item}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default TransAtionsComponent
