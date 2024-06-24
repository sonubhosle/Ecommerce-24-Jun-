import React from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Customer_Routes from './Routes/Customer_Routes'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<Customer_Routes />} />
      </Routes>
    </div>
  )
}

export default App