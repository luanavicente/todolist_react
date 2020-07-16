import React from 'react'
import { TodoData } from '../../store/modules/todo/types'
import { AiFillCheckCircle, AiFillDelete } from 'react-icons/ai'
import { BsArrowCounterclockwise } from 'react-icons/bs'

interface ComponentTodo {
    todo: TodoData,
    handleDelete: (todo: TodoData) => void,
    handleRedo: (todo: TodoData) => void,
    handleDo: (todo: TodoData) => void
}

const Todo: React.FC<ComponentTodo> = ({todo, handleDelete, handleRedo, handleDo}: ComponentTodo) => {

  return (
    <div className="todo" key={todo.id}>
        <div>{todo.message}</div>
        <div className="actions">

            {
                todo.done ? (
                    <button type="button" className="icon" onClick={() => handleRedo(todo)}>
                        <BsArrowCounterclockwise color="#e67e22"/>
                    </button>
                ) : (
                    <button type="button" className="icon" onClick={() => handleDo(todo)}>
                        <AiFillCheckCircle color="#27ae60"/>
                    </button>
                )
            }
            
            <button type="button" className="icon" onClick={() => handleDelete(todo)}>
                <AiFillDelete color="e74c3c"/>
            </button>
        </div>
    </div>
  )
}

export default Todo
