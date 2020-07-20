import { action } from 'typesafe-actions'
import { UserTypes } from './types'

export const changeUsername = (username: string) => action(UserTypes.CHANGE_USERNAME,{username})
export const changeName = (name: string) => action(UserTypes.CHANGE_USERNAME,{name})