import { Reducer } from 'redux'
import { TodoTypes, TodoList } from './types'

const INITIAL_STATE: TodoList = {
    todos: [{
        id: 'testeid',
        message: 'teste msg',
        done: false
    }]
}

const reducer: Reducer<TodoList> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TodoTypes.GET_TODO_LIST_SUCCESS:
      return {...state, todos: action.payload.todos}
    default:
      return state
  }
  
}

export default reducer
