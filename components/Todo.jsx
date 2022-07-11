import React from 'react'

const Todo = ({ todo, deleteTodo }) => {

  return (
    <li>{todo.content} <button onClick={() => deleteTodo(todo._id)}>x</button></li>
  )
}

export default Todo