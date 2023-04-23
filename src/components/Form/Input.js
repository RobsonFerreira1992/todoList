import React from 'react'
import { ContainerForm } from './styles'

const Input = ({setTodo, todo}) => {


  return (
    <ContainerForm>
      <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} placeholder="Digite aqui uma nova tarefa"/>
      <button>Adicionar</button>
    </ContainerForm>
  )
}

export default Input
