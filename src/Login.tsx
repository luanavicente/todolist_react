import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

import './styles.css'
import { ApplicationState } from './store/index'
import User from './components/User'
import { UserData } from './store/modules/user/types';
import { changeName, changeUsername } from './store/modules/user/actions';


const Login: React.FC = () => {
    const dispatch = useDispatch()
    const history = useHistory();

    const user = useSelector((state: ApplicationState) => state.user )
    
    function saveUser(user_to_save: UserData){
        dispatch(changeName(user_to_save.name))
        dispatch(changeUsername(user_to_save.username))
        history.push("/todolist");
    }

    return (
        <div id="todoList">
            <h1>Entre na TodoList da felicidade</h1>
            
            <User user={user} save={saveUser}/>
        </div>
    )
}

export default Login