import { all, takeLatest, put, select } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { uuid } from 'uuidv4'

import { ApplicationState } from '../../index'
import { changeUsername, changeName } from './actions'
import { UserTypes, UserData } from './types'
