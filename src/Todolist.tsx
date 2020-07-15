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

    const [todoList, setTodoList] = useState<Todo[]>([])
    const [todo, setTodo] = useState("")

    function addTodo() {
        const newTodo = {
            id: uuid(),
            message: todo,
            done: false
        }
        setTodoList([newTodo, ...todoList])
        setTodo("")
    }

    function markDone(todo: Todo){
        const index = todoList.indexOf(todo)
        const countNotDone = todoList.filter(todo => !todo.done).length
        const newTodo = {...todo, done: true}
        var newTodoList = todoList.slice();
        newTodoList.splice(countNotDone, 0, newTodo)
        newTodoList.splice(index,1)
        setTodoList(newTodoList)
    }

    
    function redo(todo: Todo){
        const index = todoList.indexOf(todo)
        const newTodo = {...todo, done: false}
        var newTodoList = todoList.slice();
        newTodoList.splice(index,1)
        newTodoList.splice(0, 0, newTodo)
        setTodoList(newTodoList)
    }

    function deleteTodo(todo: Todo){
        const index = todoList.indexOf(todo)
        var newTodoList = todoList.slice();
        newTodoList.splice(index,1)
        setTodoList(newTodoList)
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
                                        <button type="button" className="icon" onClick={() => redo(todo)}>
                                            <BsArrowCounterclockwise color="#e67e22"/>
                                        </button>
                                    ) : (
                                        <button type="button" className="icon" onClick={() => markDone(todo)}>
                                            <AiFillCheckCircle color="#27ae60"/>
                                        </button>
                                    )
                                }
                                
                                <button type="button" className="icon" onClick={() => deleteTodo(todo)}>
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