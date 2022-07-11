import React, { useState } from 'react'
import AddForm from '../components/AddForm'
import Todos from '../components/Todos'

const Home = () => {
  const [todos, setTodos] = useState([])

  const addTodo = async (content, callback) => {
    const data = await fetch("http://localhost:3000/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content })
    }).then(response => response.json())
    
    const newTodos = [data, ...todos]
    setTodos(newTodos)
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