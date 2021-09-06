import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'


function TodoApp() {

    const [todos, setTodos] = useState([])
    const [filterTodo, setFilterTodo] = useState([])

    const [status, setStatus] = useState("All")

    const [value, setValue] = useState("")

    const [loading, setLoading] = useState(false)
    const [time, setTime] = useState(null)

    const addTodoHandler = (input) => {
        const newTodos = {
            id: Math.floor(Math.random() * 100),
            text: input,
            isComplete: false
        }
        setTodos([...todos, newTodos])
    }

    const deleteHandler = (id) => {
        const cloneTodos = [...todos]

        const selectedItems = cloneTodos.filter(todo => todo.id !== id)
        setTodos(selectedItems)
    }

    const onUpdateTodo = (id, newValue) => {
        console.log(id);

        const cloneTodos = [...todos]
        const selectedIndex = cloneTodos.find(todo => todo.id == id)
        selectedIndex.text = newValue

        setTodos(cloneTodos)
    }

    const completeHadnler = (id) => {
        console.log(id);

        const cloneTodos = [...todos];

        const selectedItems = cloneTodos.find(todo => todo.id == id)
        selectedItems.isComplete = !selectedItems.isComplete

        setTodos(cloneTodos)
    }

    const ChangeFilterTodo = (value) => {
        console.log(value);
        switch (value) {
            case "Completed":
                setFilterTodo(todos.filter((t) => t.isComplete))
                break;
            case "UnCompleted":
                setFilterTodo(todos.filter((t) => !t.isComplete))
                break;
            default:
                setFilterTodo(todos)
        }
    }

    const handleChange = (e) => {
        setStatus(e.value)
        ChangeFilterTodo(e.label)
        console.log(e);
    }

    const changeHandlerValue = (e) => {
        setValue(e.target.value)
    }


    useEffect(() => {
        ChangeFilterTodo(status)
    }, [todos, status])

    useEffect(() => {
        setLoading(true)
        setTime(setInterval(() => {
            setLoading(false)
        }, 4000))
    }, [])


    return (
        <div>
            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', background: '#333', padding: '16rem' }}>
                    <ClimbingBoxLoader
                        color={"#F8E71C"}
                        size={35}
                    />
                    <h2 className="text-warning p-3 ">Loading...</h2>
                </div>
            ) : (
                <div>
                    <TodoForm
                        setTodos={addTodoHandler}
                        title="Add"
                        label="Todo"
                    />
                    <Navbar
                        todos={todos}
                        status={status}
                        onChange={handleChange}
                        filterTodos={ChangeFilterTodo}
                        value={value}
                        setValue={setValue}
                    />
                    <TodoList
                        todos={filterTodo}
                        onDelete={deleteHandler}
                        onUpdateTodo={onUpdateTodo}
                        onComplete={completeHadnler}
                        search={value}
                    />
                </div>
            )
            }
        </div>
    )
}

export default TodoApp
