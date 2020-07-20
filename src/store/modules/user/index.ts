import { Reducer } from 'redux'
import { UserTypes, UserData } from './types'

const INITIAL_STATE: UserData = {
  username: "",
  name: ""
}

const reducer: Reducer<UserData> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserTypes.CHANGE_NAME:
      return {...state, name: action.payload.name}
    case UserTypes.CHANGE_USERNAME:
      return {...state, name: action.payload.username}
    default:
      return state
  }
  
}

export default reducer
