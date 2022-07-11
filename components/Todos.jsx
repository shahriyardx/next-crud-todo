import React from 'react'
import Todo from './Todo'

const Todos = ({ todos, deleteTodo, updateTodo }) => {

  return (
    <ul>
      {todos.map(todo => (
        <Todo 
          key={todo._id} 
          todo={todo} 
          deleteTodo={deleteTodo} 
          updateTodo={updateTodo} 
        />
        )
      )}
    </ul>
  )
}

export default Todos