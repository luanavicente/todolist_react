import React, { useState } from 'react';
import './styles.css'
import { AiFillCheckCircle, AiFillDelete } from 'react-icons/ai'
import { BsArrowCounterclockwise } from 'react-icons/bs'

const TodoList: React.FC = () => {

    
    const mock = [
        {
            message: "Testinho",
            done: false
        },
        {
            message: "Testando 2",
            done: false
        }
    ]

    const [todoList, setTodoList] = useState(mock)

    return (
        <div id="todoList">
            <h1>TodoList da felicidade</h1>

            <div className="todoInput">
                <input type="text"/>
                <button type="button" className="addTodo">Add</button>
            </div>

            <div>
                {
                    todoList.map(todo => (
                        <div className="todo">
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