import React, { useState } from 'react'
import AddForm from '../components/AddForm'
import Todos from '../components/Todos'

const Home = () => {
  const [todos, setTodos] = useState([
    {_id: 1, content: "Hello world"},
    {_id: 2, content: "This is second task"}
  ])

  const addTodo = (todoData, callback) => {
    console.log(todoData)
    callback()
  }

  const deleteTodo = (todoId) => {
    console.log(todoId)
  }

  return (
    <div style={{ display: 'grid', placeItems: 'center', marginTop: 30 }}>
      <div>
        <AddForm addTodo={addTodo} />
        <Todos todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  )
}

export default Home