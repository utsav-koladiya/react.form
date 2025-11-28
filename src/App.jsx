import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Update from './Update'
import Create from './Create'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/update/:id' element={<Update/>} />
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App