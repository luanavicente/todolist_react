import { all } from 'redux-saga/effects'

import todo from './todo/sagas'

export default function* rootSaga() {
  return yield all([todo])
}
