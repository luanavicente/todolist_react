export enum TodoTypes {
    'GET_TODO_LIST_REQUEST' = '@todo/GET_TODO_LIST_REQUEST',
    'GET_TODO_LIST_SUCCESS' = '@todo/GET_TODO_LIST_SUCCESS',
    'ADD_NEW_TODO' = '@todo/ADD_NEW_TODO',
    'DELETE_TODO' = '@todo/DELETE_TODO',
    'SET_NEW_TODO_LIST' = '@todo/SET_NEW_TODO_LIST',
    'MARK_DONE' = '@todo/MARK_DONE',
    'MARK_REDO' = '@todo/MARK_REDO'
}
  
export interface TodoData {
    _id: string,
    message: string,
    done: boolean,
    _v: number
}

export interface TodoList {
    todos: TodoData[]
}