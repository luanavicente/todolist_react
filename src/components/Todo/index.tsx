import React from 'react'
import { TodoData } from '../../store/modules/todo/types'
import { AiFillCheckCircle, AiFillDelete } from 'react-icons/ai'
import { BsArrowCounterclockwise } from 'react-icons/bs'

interface ComponentTodo {
    todo: TodoData,
    handleDelete: (id: string) => void,
    handleRedo: (id: string) => void,
    handleDo: (id: string) => void
}

const Todo: React.FC<ComponentTodo> = ({todo, handleDelete, handleRedo, handleDo}: ComponentTodo) => {

  return (
    <div className="todo" key={todo.id}>
        <div>{todo.message}</div>
        <div className="actions">

            {
                todo.done ? (
                    <button type="button" className="icon" onClick={() => handleRedo(todo.id)}>
                        <BsArrowCounterclockwise color="#e67e22"/>
                    </button>
                ) : (
                    <button type="button" className="icon" onClick={() => handleDo(todo.id)}>
                        <AiFillCheckCircle color="#27ae60"/>
                    </button>
                )
            }
            
            <button type="button" className="icon" onClick={() => handleDelete(todo.id)}>
                <AiFillDelete color="e74c3c"/>
            </button>
        </div>
    </div>
  )
}

export default Todo
