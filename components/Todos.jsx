import React from 'react'
import Todo from './Todo'

const Todos = ({ todos, deleteTodo }) => {

  return (
    <ul>
      {todos.map(todo => <Todo key={todo._id} todo={todo} deleteTodo={deleteTodo} />)}
    </ul>
  )
}

export default Todos