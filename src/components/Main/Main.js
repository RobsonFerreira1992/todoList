import React from 'react'
import Input from '../Form/Input'
import Table from '../Table/Table'
import { Corpo } from './styles'
const Main = () => {

  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState("");
  
  function handleSubmit(e){
    e.preventDefault()
   if(todo === ""){
     alert("preencha com alguma informação")
   }else{
    const newTodo = {
      id: new Date().getTime(),
      text:todo,
      completed:false
    }
    setTodos([...todos].concat(newTodo))
    setTodo("")
   }
    
  }
  React.useEffect(()=>{
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)

    if(loadedTodos){
      setTodos(loadedTodos)
    }
  },[])

  React.useEffect(()=>{
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  },[todos])

  return (
    <Corpo>
      <form onSubmit={handleSubmit}>
        <Input setTodo={setTodo} todo={todo}/>
      </form>
      <Table todos={todos} setTodos={setTodos}/>
    </Corpo>
  )
}

export default Main
