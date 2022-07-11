import React, { useEffect, useState } from 'react'
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

  const deleteTodo = async (todoId) => {
    const data = await fetch(`http://localhost:3000/api/todo/${todoId}`, {
      method: "DELETE"
    }).then(response => response.json())
    
    if (data.deletedCount) {
      const newTodos = todos.filter(todo => todo._id !== todoId)
      setTodos(newTodos)
    }
  }

  const updateTodo = async (todoId, content, callback) => {
    const data = await fetch(`http://localhost:3000/api/todo/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content })
    }).then(response => response.json())
    
    if (data.modifiedCount) {
      const updatedTodos = todos.map(todo => todo._id === todoId ? {...todo, content} : todo )
      setTodos(updatedTodos)
      callback()
    }
  }

  useEffect(() => {
    fetch("http://localhost:3000/api/todo")
      .then(response => response.json())
      .then(data => {
        setTodos(data)
      })
  }, [])

  return (
    <div style={{ display: 'grid', placeItems: 'center', marginTop: 30 }}>
      <div>
        <AddForm addTodo={addTodo} />
        <Todos 
          todos={todos} 
          deleteTodo={deleteTodo} 
          updateTodo={updateTodo} 
        />
      </div>
    </div>
  )
}

export default Home