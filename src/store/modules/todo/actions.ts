import { action } from 'typesafe-actions'
import { TodoTypes, TodoData, TodoList } from './types'

export const getTodoListRequest = () => action(TodoTypes.GET_TODO_LIST_REQUEST)
export const getTodoListSuccess = (todos: TodoData[]) => action(TodoTypes.GET_TODO_LIST_SUCCESS,{ todos })
export const addNewTodo = (message: string) => action(TodoTypes.ADD_NEW_TODO, { message })
export const deleteTodoFromList = (id: string) => action(TodoTypes.DELETE_TODO,{ id })
export const setNewTodoList = (list: TodoList) => action(TodoTypes.SET_NEW_TODO_LIST,{list})
export const markAsDone = (id: string) => action(TodoTypes.MARK_DONE,{id})
export const markToRedo = (id: string) => action(TodoTypes.MARK_REDO,{id})