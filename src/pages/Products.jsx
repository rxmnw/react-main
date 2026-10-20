import React from 'react'
export const products = [
    {
        id : 1 ,
        name : "Iphone DUO"
    },
    {
        id : 2,
        name : "Iphone 18 Pro Max"
    },
    {
        id : 3,
        name : "Iphone 16 Pro Max"
    },
]

const Products = () => {

  return (
    <div>
        {
                products.map((el) => {
                    return <div>
                        <h1>{el.name}</h1>
                        <Link to={`/products/${el.id}`}>Info</Link>
                    </div>
                })
        }x``
    </div>
  )
}

export default Products