import React, { useState, useEffect } from 'react'
import { UserData } from '../../store/modules/user/types'
import { Container, Label, Button } from './styles'
import { IoMdLogIn } from 'react-icons/io'

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
        <Container>
            <Label htmlFor="input_username">Username</Label>
            <input 
                id="input_username"
                type="text" 
                value={valueUsername} 
                onChange={ e => setValueUsername(e.target.value) }
            />
        </Container>
        
        <Container>
            <Label htmlFor="input_name">Nome</Label>
            <input 
                id="input_name"
                type="text" 
                value={valueName} 
                onChange={ e => setValueName(e.target.value) }
            />
        </Container>
        
        <Button 
            type="button" 
            className="save" 
            onClick={() => save(
                {...user,
                name: valueName,
                username: valueUsername}
            )}
        >
            <IoMdLogIn color="#DADADA"/>
            Entrar
        </Button>
    </div>
    </div>
  )
}

export default Todo
