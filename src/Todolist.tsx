import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { ApplicationState } from './store/index'
import Todo from './components/Todo'
import { getTodoListRequest, addNewTodo, deleteTodoFromList, markAsDone, markToRedo } from './store/modules/todo/actions'
import { TodoInput, ButtonAdd, DivTodo, List } from './styles'

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
        <List id="todoList">
            <h1>TodoList da felicidade</h1>
            <h5>Bem-vinde, {user.name}</h5>

            <TodoInput>
                <input 
                    type="text" 
                    value={newTodoMessage} 
                    onChange={ e => setnewTodoMessage(e.target.value) }
                />
                <ButtonAdd 
                    type="button" 
                    className="addTodo" 
                    onClick={() => addTodo(newTodoMessage)}
                >
                    Add
                </ButtonAdd>
            </TodoInput>


            <div>
                {
                    todos.length === 0 ? (
                        <h5>Não há tarefas cadastradas.</h5>
                    ) : (
                        todos.map(todo => (
                            <DivTodo className="todo" key={todo.id}>
                                <Todo todo={todo} handleDelete={deleteTodo} handleRedo={redo} handleDo={markDone}/>
                            </DivTodo>
                        ))
                    )
                }
            </div>
        </List>
    )
}

export default TodoList