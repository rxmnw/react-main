import React from 'react'
import { useParams } from 'react-router'
import { products } from './Products'
 
const ProductsById = () => {
    const {id} = useParams()
    const product = products.find((el) => el.id == id)
    
  return (
    <div>
        {
            product?.name
        }
    </div>
  )
}

export default ProductsById