import { action } from 'typesafe-actions'
import { TodoTypes, TodoData, TodoList } from './types'
import { act } from 'react-dom/test-utils'

export const getTodoListRequest = () => action(TodoTypes.GET_TODO_LIST_REQUEST)
export const getTodoListSuccess = (todos: TodoData[]) => action(TodoTypes.GET_TODO_LIST_SUCCESS,{ todos })
export const addNewTodo = (message: string) => action(TodoTypes.ADD_NEW_TODO, { message })
export const deleteTodoFromList = (todo: TodoData) => action(TodoTypes.DELETE_TODO,{ todo })
export const setNewTodoList = (list: TodoList) => action(TodoTypes.SET_NEW_TODO_LIST,{list})
export const markAsDone = (todo: TodoData) => action(TodoTypes.MARK_DONE,{todo})
export const markToRedo = (todo: TodoData) => action(TodoTypes.MARK_REDO,{todo})