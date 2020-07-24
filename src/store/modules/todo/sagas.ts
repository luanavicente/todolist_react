import { call, all, takeLatest, put, select } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { uuid } from 'uuidv4'

import { ApplicationState } from '../../index'
import { getTodoListSuccess, getTodoListRequest, setNewTodoList } from './actions'
import { TodoTypes, TodoData } from './types'
import api from '../../../services/api'

function* getTodoList() {
    const todos = yield call(api.get, '')
    const todoList = todos.data ?? []
  
    if (todoList.length > 0){
        todoList.sort((a: TodoData,b: TodoData) => {
            if (a.done) return 1
            if (b.done) return -1
            return 0
        })
        yield put(getTodoListSuccess(todoList))
    }
    else{
        yield put(getTodoListSuccess([]))
    }
  }

  function* addNewTodo({payload}: AnyAction){
        const newTodo = {
            message: payload.message
        }
        yield call(api.post, '', newTodo)
        const todos = yield call(api.get, '')
        const todoList = todos.data ?? []

        todoList.sort((a: TodoData,b: TodoData) => {
            if (a.done) return 1
            if (b.done) return -1
            return 0
        })
        yield put(setNewTodoList(todoList))
  }

  function* deleteThisTodo({payload}: AnyAction){        
        yield call(api.delete, payload.id)

        const todos = yield call(api.get, '')
        const todoList = todos.data ?? []
        
        todoList.sort((a: TodoData,b: TodoData) => {
            if (a.done) return 1
            if (b.done) return -1
            return 0
        })
        yield put(setNewTodoList(todoList))
  }

  function* setNewList({payload}: AnyAction){
    yield put(getTodoListSuccess(payload.list))
}

function* markAsDone({payload}: AnyAction){
    yield call(api.patch, payload.id, {done: true})
    
    const todos = yield call(api.get, '')
    const todoList = todos.data ?? []

    todoList.sort((a: TodoData,b: TodoData) => {
        if (a.done) return 1
        if (b.done) return -1
        return 0
    })
    yield put(setNewTodoList(todoList))
}

function* markRedo({payload}:AnyAction){
    yield call(api.patch, payload.id, {done: false})
    
    const todos = yield call(api.get, '')
    const todoList = todos.data ?? []

    todoList.sort((a: TodoData,b: TodoData) => {
        if (a.done) return 1
        if (b.done) return -1
        return 0
    })
    yield put(setNewTodoList(todoList))
}
  
  export default all([
    takeLatest(TodoTypes.GET_TODO_LIST_REQUEST, getTodoList),
    takeLatest(TodoTypes.ADD_NEW_TODO,addNewTodo),
    takeLatest(TodoTypes.DELETE_TODO,deleteThisTodo),
    takeLatest(TodoTypes.SET_NEW_TODO_LIST,setNewList),
    takeLatest(TodoTypes.MARK_DONE,markAsDone),
    takeLatest(TodoTypes.MARK_REDO,markRedo)
  ])