import React from 'react'
import AddForm from '../components/AddForm'
import Todos from '../components/Todos'

const Home = () => {
  return (
    <div style={{ display: 'grid', placeItems: 'center', marginTop: 30 }}>
      <div>
        <AddForm />
        <Todos />
      </div>
    </div>
  )
}

export default Home