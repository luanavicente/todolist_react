import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import './styles.css'
import { ApplicationState } from './store/index'
import Todo from './components/Todo'
import { getTodoListRequest, addNewTodo, deleteTodoFromList, markAsDone, markToRedo } from './store/modules/todo/actions'


const TodoList: React.FC = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state: ApplicationState) => state.todo.todos )
    const user = useSelector((state: ApplicationState) => state.user )

    const [newTodoMessage, setnewTodoMessage] = useState("")

    function deleteTodo(id: string){
        dispatch(deleteTodoFromList(id))
    }

    function redo(id: string){
        dispatch(markToRedo(id))
    }

    function markDone(id: string){
        dispatch(markAsDone(id))
    }

    function addTodo(message: string){
        dispatch(addNewTodo(message))
    }

    useEffect(() => {
        dispatch(getTodoListRequest())
    }, [])   

    return (
        <div id="todoList">
            <h1>TodoList da felicidade</h1>
            <h5>Bem-vinde, {user.name}</h5>

            <div className="todoInput">
                <input 
                    type="text" 
                    value={newTodoMessage} 
                    onChange={ e => setnewTodoMessage(e.target.value) }
                />
                <button 
                    type="button" 
                    className="addTodo" 
                    onClick={() => addTodo(newTodoMessage)}
                >
                    Add
                </button>
            </div>


            <div>
                {
                    todos.length === 0 ? (
                        <h5>Não há tarefas cadastradas.</h5>
                    ) : (
                        todos.map(todo => (
                            <div className="todo" key={todo.id}>
                                <Todo todo={todo} handleDelete={deleteTodo} handleRedo={redo} handleDo={markDone}/>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default TodoList