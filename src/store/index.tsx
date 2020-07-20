import {
    applyMiddleware,
    compose,
    createStore,
    Store,
    StoreEnhancer,
  } from 'redux'
  
  import createSagaMiddleware from 'redux-saga'
  
  import rootReducer from './modules/rootReducer'
  import rootSaga from './modules/rootSaga'
  import { TodoList } from './modules/todo/types'
  import { UserData } from './modules/user/types'
  
  export interface ApplicationState {
    todo: TodoList,
    user: UserData
  }

declare global {
  interface Console {
      tron: any
  }
}

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const enhancer: StoreEnhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware)

const store: Store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

export { store }
