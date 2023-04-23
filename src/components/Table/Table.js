import React from 'react'
import { ButtonDelete, ButtonEdit, ButtonSave, Conteudo, InputUpdate, Title } from './styles'
import TableFeito from './TableFeito'

const Table = ({todos, setTodos}) => {
  const [todoEditing, setTodoEditing] = React.useState(null)
  const [editingText, setEdintingText] = React.useState("")
  
  function toggleComplete(id){
    const updatedTodos = [...todos].map((todo) =>{
      
        if(todo.id === id){
          todo.completed = !todo.completed
          
        }
        return todo
      
      
    })
    setTodos(updatedTodos)
  }
  function deleteTodo(id){
    const updatedTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }
  function editTodo(id){
    
    const updatedTodos = [...todos].map((todo)=>{
      
      if(todo.id === id){
        todo.text = editingText
      }
      return todo
    })
    setTodos(updatedTodos)
    setTodoEditing(null)
    setEdintingText("")
  }

 
  return (
    <>
    <Title>A Fazer</Title>
    <table className="table">
      <tbody>
        {todos.map((todo)=>
          <tr key={todo.id}>
            {!todo.completed && 
            <>
              <td><input type="checkbox" id="completed" checked={todo.completed}  onChange={() => toggleComplete(todo.id)}/></td>
              {todoEditing === todo.id ? (<InputUpdate type="text" onChange={(e) => setEdintingText(e.target.value)} value={editingText} />) : (<Conteudo>{todo.text}</Conteudo>)}
              <td>{todoEditing === todo.id ? (<ButtonSave onClick={() => editTodo(todo.id)}><i class="fas fa-share-square"></i></ButtonSave>) : (<ButtonEdit onClick={() => setTodoEditing(todo.id)}><i class="fas fa-edit"></i></ButtonEdit>)}</td>
              <td><ButtonDelete type="button" onClick={() => deleteTodo(todo.id)} ><i class="fas fa-trash-alt"></i></ButtonDelete></td>
            </>
            }
            
          </tr>
          )}
      </tbody>
    </table>
    
    <TableFeito todos={todos} setTodos={setTodos} todoEditing={todoEditing} setEdintingText={setEdintingText} editingText={editingText} title="Feito" deleteTodo={deleteTodo}/>

    
    </>
  )
}

export default Table
