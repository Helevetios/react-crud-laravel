import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateProduct from './components/CreateProduct'
import EditProduct from './components/EditProduct'
import ShowProducts from './components/ShowProducts'

export default function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowProducts />} />
          <Route path='/create' element={<CreateProduct />} />
          <Route path='/edit/:id' element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
