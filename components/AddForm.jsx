import React from 'react'

const AddForm = () => {
  return (
    <div>
      <form>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="text" placeholder="Enter your todo here" style={{ padding: 10 }}/>
          <button style={{ padding: 10 }}>Add Todo</button>
        </div>
      </form>
    </div>
  )
}

export default AddForm