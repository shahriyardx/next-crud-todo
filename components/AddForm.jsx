import React from 'react'

const AddForm = ({ addTodo }) => {
  const handleSubmit = (event) => {
    event.preventDefault()

    const content = event.target.content.value
    addTodo(content, () => {
      event.target.reset()
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input name="content" type="text" placeholder="Enter your todo here" style={{ padding: 10 }}/>
        <button style={{ padding: 10 }}>Add Todo</button>
      </div>
    </form>
  )
}

export default AddForm