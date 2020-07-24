import React from 'react'
import { TodoData } from '../../store/modules/todo/types'
import { AiFillCheckCircle, AiFillDelete } from 'react-icons/ai'
import { BsArrowCounterclockwise } from 'react-icons/bs'
import { ButtonActions } from './styles'

interface ComponentTodo {
    todo: TodoData,
    handleDelete: (id: string) => void,
    handleRedo: (id: string) => void,
    handleDo: (id: string) => void
}

const Todo: React.FC<ComponentTodo> = ({todo, handleDelete, handleRedo, handleDo}: ComponentTodo) => {

  return (
    <>
        <div>{todo.message}</div>
        <div className="actions">

            {
                todo.done ? (
                    <ButtonActions type="button" className="icon" onClick={() => handleRedo(todo._id)}>
                        <BsArrowCounterclockwise color="#e67e22"/>
                    </ButtonActions>
                ) : (
                    <ButtonActions type="button" className="icon" onClick={() => handleDo(todo._id)}>
                        <AiFillCheckCircle color="#27ae60"/>
                    </ButtonActions>
                )
            }
            
            <ButtonActions type="button" className="icon" onClick={() => handleDelete(todo._id)}>
                <AiFillDelete color="e74c3c"/>
            </ButtonActions>
        </div>
    </>
  )
}

export default Todo
