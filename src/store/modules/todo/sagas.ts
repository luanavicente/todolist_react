import { all, takeLatest, put, select } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { uuid } from 'uuidv4'

import { ApplicationState } from '../../index'
import { getTodoListSuccess, getTodoListRequest, setNewTodoList } from './actions'
import { TodoTypes, TodoData } from './types'

function* getTodoList() {
    const todos = localStorage.getItem('todoList')
  
    if (todos){
        yield put(getTodoListSuccess(JSON.parse(todos)))
    }
    else{
        yield put(getTodoListSuccess([]))
    }
  }

  function* addNewTodo({payload}: AnyAction){
        const newTodo = {
            id: uuid(),
            message: payload.message,
            done: false
        }
        const todos = localStorage.getItem('todoList')
        const todoList = todos ? JSON.parse(todos) : []

        localStorage.setItem('todoList',JSON.stringify([newTodo, ...todoList]))
        yield put(getTodoListRequest())
  }

  function* deleteThisTodo({payload}: AnyAction){
        const todoList = yield select((state: ApplicationState) => state.todo.todos)
        const newTodoList = todoList.filter((todo: TodoData) => todo.id !== payload.id)
        yield put(setNewTodoList(newTodoList))
  }

  function* setNewList({payload}: AnyAction){
    localStorage.setItem('todoList',JSON.stringify(payload.list))
    yield put(getTodoListRequest())
}

function* markAsDone({payload}: AnyAction){        
    const todoList = yield select((state: ApplicationState) => state.todo.todos)

    const newTodoList = todoList.map((todo: TodoData) => {
        if(todo.id === payload.id){
            return {...todo,done:true}
        }
        return todo
    })
    newTodoList.sort((a: TodoData,b: TodoData) => {
        if (a.done) return 1
        if (b.done) return -1
        return 0
    })
    yield put(setNewTodoList(newTodoList))
}

function* markRedo({payload}:AnyAction){
    const todoList = yield select((state: ApplicationState) => state.todo.todos)

    const newTodoList = todoList.map((todo: TodoData) => {
        if(todo.id === payload.id){
            return {...todo,done:false}
        }
        return todo
    })
    newTodoList.sort((a: TodoData,b: TodoData) => {
        if (a.done) return 1
        if (b.done) return -1
        return 0
    })
    localStorage.setItem('todoList',JSON.stringify(newTodoList))
    yield put(setNewTodoList(newTodoList))
}
  
  export default all([
    takeLatest(TodoTypes.GET_TODO_LIST_REQUEST, getTodoList),
    takeLatest(TodoTypes.ADD_NEW_TODO,addNewTodo),
    takeLatest(TodoTypes.DELETE_TODO,deleteThisTodo),
    takeLatest(TodoTypes.SET_NEW_TODO_LIST,setNewList),
    takeLatest(TodoTypes.MARK_DONE,markAsDone),
    takeLatest(TodoTypes.MARK_REDO,markRedo)
  ])