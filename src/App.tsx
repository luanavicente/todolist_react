import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'

import './config/ReactotronConfig'
import { store } from './store'
import TodoList from './Todolist'
import Login from './Login'
import GlobalStyle from './styles'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Router>
        <Switch>
          <Route component={TodoList} exact path="/todoList"/>
          <Route component={Login} exact path="/"/>
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
