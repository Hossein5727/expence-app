import { TextField } from '@material-ui/core'
import React from 'react'
import Select from 'react-select'

const options = [
    { value: 'All', label: "All" },
    { value: 'Completed', label: "Completed" },
    { value: 'UnCompleted', label: "UnCompleted" },
]

function Navbar({ todos, status, onChange, value, setValue }) {

    return (
        <>
            {todos != "" && (
                <div>
                    <div className="p-3 ">
                        <Select
                            options={options}
                            value={status}
                            onChange={onChange}
                        />
                    </div>
                    <div className="text-center">
                        <TextField
                            variant="filled"
                            type="text"
                            value={value}
                            onChange={e => { setValue(e.target.value) }}
                            label="Search..."
                            className="mt-2"
                            color="secondary"
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
