import { Button, CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import styles from './todo.module.css'

function TodoList({ todos, onDelete, onUpdateTodo, onComplete, search }) {

    const [edit, setEdit] = useState({ id: null, text: "" })

    const editTodo = (newValue) => {
        onUpdateTodo(edit.id, newValue)
        setEdit({ id: null, text: "" })
    }

    const showTodo = () => {

        if (todos.length === 0) { return <h4 className="text-center mt-3 alert-danger p-3">add some todos</h4> }

        else return todos.filter((val) => {
            if (search == "") {
                return val

            } else if (val.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                return val
            }
        }).map((item) => {
            return (
                <>
                    <div className={styles.todo}>
                        <Todo
                            item={item}
                            key={todos.id}
                            onDelete={() => onDelete(item.id)}
                            onEdit={() => setEdit(item)}
                            onComplete={() => onComplete(item.id)}
                        />
                    </div>
                </>
            )
        })
    }

    return (
        <div>
            {edit.id ? <TodoForm setTodos={editTodo} title="Update" label="Update todo" edit={edit} /> : showTodo()}
        </div>
    )
}



export default TodoList
