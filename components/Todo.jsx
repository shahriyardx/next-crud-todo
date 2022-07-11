import React, { useState } from 'react'

const Todo = ({ todo, deleteTodo, updateTodo }) => {
  const [editing, setEditing] = useState(false)
  
  const handleUpdate = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    
    updateTodo(todo._id, content, () => {
      setEditing(false)
    })
  }
  return (
    <li>
      {!editing && (
        <div style={{ display: 'flex', gap: 10 }}>
          <span>
            {todo.content}
          </span>

          <button onClick={() => deleteTodo(todo._id)}>❌</button>
          <button onClick={() => setEditing(true)}>🖊</button>
        </div>
      )}

      {editing && (
        <form onSubmit={handleUpdate}>
          <input name="content" type="text" defaultValue={todo.content} />
          <button>Update</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </form>
      )}
    </li>
  )
}

export default Todo