import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ShowProducts = () => {

    const [products, setProducts] = useState([])

    const getAllProducts = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/products')
        setProducts(response.data)
    }

    const deleteProduct = async (id) => {
        var dialog = confirm('are you sure?')

        if (dialog) {
            await axios.delete(`http://127.0.0.1:8000/api/product/${id}`)
            getAllProducts()
        }
        
    }


    useEffect(() => {
        getAllProducts()
    }, [])

    return (

        <div className="row">
            <div className='p-3'>
                <Link className='btn btn-dark mt-3 mb-3' to={'/create'}>Create</Link>
            </div>
            {
                products.map(product => (
                    <div className="col-md-4" key={product.id}>
                        <div className="card mb-3">
                            <h5 className="card-header">Product</h5>
                            <div className="card-body">
                                <h5 className="card-title">Stock: {product.stock}</h5>
                                <p className="card-text">{product.description}</p>
                            </div>
                            <div className="card-footer">
                                <Link to={`/edit/${product.id}`} className='btn btn-info'>Editar</Link>
                                <button onClick={() => deleteProduct(product.id)} className='btn btn-danger float-end'>Eliminar</button>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ShowProducts