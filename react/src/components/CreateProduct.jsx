import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom"

const endpoint = 'http://127.0.0.1:8000/api/product'

const CreateProduct = () => {

  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)

  const navigate = useNavigate()

  const store = async (e) => {
    e.preventDefault()
    await axios.post(endpoint, {
      description: description,
      price: price,
      stock: stock
    })
    navigate('/')
  }

  return (
    <div>
      <h3 className='mt-4 text-center'>Create Product</h3>

      <div>
        <Link className='btn btn-dark mt-3 mb-3' to={'/'}>Back</Link>
      </div>

      <form onSubmit={store}>
        <div className='mb-3'>
          <label className='form-label'>Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='form-control' />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className='form-control' />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Stock</label>
          <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} className='form-control' />
        </div>

        <button type='submit' className='btn btn-dark float-end'>Store</button>
      </form>

    </div>
  )
}

export default CreateProduct