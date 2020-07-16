import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import './styles.css'
import { ApplicationState } from './store/index'
import Todo from './components/Todo'
import { getTodoListRequest, addNewTodo, deleteTodoFromList, markAsDone, markToRedo } from './store/modules/todo/actions'
import { TodoData } from './store/modules/todo/types';


const TodoList: React.FC = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state: ApplicationState) => state.todo.todos )

    const [newTodoMessage, setnewTodoMessage] = useState("")

    function deleteTodo(todo: TodoData){
        dispatch(deleteTodoFromList(todo))
    }

    function redo(todo: TodoData){
        dispatch(markToRedo(todo))
    }

    function markDone(todo: TodoData){
        dispatch(markAsDone(todo))
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
                            <Todo todo={todo} handleDelete={deleteTodo} handleRedo={redo} handleDo={markDone}/>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default TodoList