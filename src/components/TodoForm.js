import { TextField, Button } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { Modal } from 'react-bootstrap'

function TodoForm({ setTodos, title, label, edit }) {

    const [value, setValue] = useState(edit ? edit.text : '')
    const [showModal, setShowModal] = useState(false)

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()

        if (!value) {
            // alert("enter Todo!")
            setShowModal(true)
            return;
        }

        setTodos(value)
        setValue("")
        inputRef.current.focus()
    }


    const ShowModal = () => (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header >
                <Modal.Title>enter Todo!</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="contained" color="primary" onClick={() => setShowModal(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )

    return (
        <div className="alert-dark">
            <h1 className="text-center">Todo</h1>
            <form className="d-flex justify-content-center align-items-center" onSubmit={submitHandler}>
                <TextField
                    type="text"
                    variant="filled"
                    label={label}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="m-3"
                    inputRef={inputRef}
                />

                <Button variant="contained" color="default" type="submit">{title}</Button>
            </form>
            <ShowModal />
        </div>
    )
}

export default TodoForm
