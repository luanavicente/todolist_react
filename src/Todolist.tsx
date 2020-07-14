import React, { useState, useEffect } from 'react';
import './styles.css'
import { uuid } from 'uuidv4'
import { AiFillCheckCircle, AiFillDelete } from 'react-icons/ai'
import { BsArrowCounterclockwise } from 'react-icons/bs'

interface Todo {
    id: string,
    message: string,
    done: boolean
}

const TodoList: React.FC = () => {
    
    const mock = [
        {
            id: uuid(),
            message: "Testinho",
            done: false
        },
        {
            id: uuid(),
            message: "Testandinho 2",
            done: true
        }
    ]

    const [todoList, setTodoList] = useState<Todo[]>([])
    const [todo, setTodo] = useState("")

    function addTodo() {
        const newTodo = {
            id: uuid(),
            message: todo,
            done: false
        }
        setTodoList([newTodo, ...todoList])
    }

    useEffect(() => {
        const todos = localStorage.getItem('todoList')

        if(todos){
            setTodoList(JSON.parse(todos))
        }
    },[])

    useEffect(() => {
        localStorage.setItem('todoList',JSON.stringify(todoList))
    },[todoList])

    return (
        <div id="todoList">
            <h1>TodoList da felicidade</h1>

            <div className="todoInput">
                <input 
                    type="text" 
                    value={todo} 
                    onChange={ e => setTodo(e.target.value) }
                />
                <button 
                    type="button" 
                    className="addTodo" 
                    onClick={addTodo}
                >
                    Add
                </button>
            </div>

            <div>
                {
                    todoList.map(todo => (
                        <div className="todo" key={todo.id}>
                            <div>{todo.message}</div>
                            <div className="actions">

                                {
                                    todo.done ? (
                                        <button type="button" className="icon">
                                            <BsArrowCounterclockwise color="#e67e22"/>
                                        </button>
                                    ) : (
                                        <button type="button" className="icon">
                                            <AiFillCheckCircle color="#27ae60"/>
                                        </button>
                                    )
                                }
                                
                                <button type="button" className="icon">
                                    <AiFillDelete color="e74c3c"/>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TodoList