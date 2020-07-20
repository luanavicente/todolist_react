import React, { useState, useEffect } from 'react'
import { UserData } from '../../store/modules/user/types'

interface ComponentUser {
    user: UserData,
    save: (user: UserData) => void
}

const Todo: React.FC<ComponentUser> = ({user, save}: ComponentUser) => {

    const [valueUsername, setValueUsername] = useState("")
    const [valueName, setValueName] = useState("")
    
    useEffect(() => {
        setValueUsername(user.username)
        setValueName(user.name)
    }, [])   

  return (
    <div className="user">
    <div className="userInput">
        <label htmlFor="input_username">Username</label>
        <input 
            id="input_username"
            type="text" 
            value={valueUsername} 
            onChange={ e => setValueUsername(e.target.value) }
        />

        <br/>
        
        <label htmlFor="input_name">Name</label>
        <input 
            id="input_name"
            type="text" 
            value={valueName} 
            onChange={ e => setValueName(e.target.value) }
        />

        <br/>

        <button 
            type="button" 
            className="save" 
            onClick={() => save(
                {...user,
                name: valueName,
                username: valueUsername}
            )}
        >
            Save
        </button>
    </div>
    </div>
  )
}

export default Todo
