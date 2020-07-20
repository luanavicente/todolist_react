import styled, { createGlobalStyle } from 'styled-components'

export const TodoInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`

export const ButtonAdd = styled.button`
    height: 30px;
    width: 60px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    margin-left: 5px;
    cursor: pointer;
`

export const DivTodo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 10px 0;
    border: 1px solid #eaeaea;
    border-radius: 10px;
`

export const List = styled.div`
    width: 400px;
    margin: 0 auto;
`

const GlobalStyle = createGlobalStyle`
    * {
        outline: none
    }

    body {
        color: #717171;
        font-family: Helvetica, sans-serif;
        display: flex;
        justify-content: space-around;
    }

    input{
        height: 30px;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 0 10px;
    }
`

export default GlobalStyle