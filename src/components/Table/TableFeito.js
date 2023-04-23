import React from 'react'
import { ButtonDelete, Conteudo,InputUpdate, Title } from './styles'


const TableFeito = ({todos, deleteTodo, title, todoEditing,setEdintingText, editingText}) => {
  return (
    <>
    <Title>{title}</Title>
    <table className="table">
      <tbody>
        {todos.map((todo)=>
          <tr key={todo.id}>
            {todo.completed && (
              <>
                <td><input type="checkbox" id="completed" checked={todo.completed} disabled/></td>
                {todoEditing === todo.id ? (<InputUpdate type="text" onChange={(e) => setEdintingText(e.target.value)} value={editingText} />) : (<Conteudo>{todo.text}</Conteudo>)}
                <td><ButtonDelete type="button" onClick={() => deleteTodo(todo.id)} ><i class="fas fa-trash-alt"></i></ButtonDelete></td>
              </>
            )}
          </tr>
          )}
      </tbody>
    </table>
    </>
  )
}

export default TableFeito
