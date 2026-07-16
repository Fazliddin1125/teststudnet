import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({product}) => { 
    const navigate = useNavigate()

  return (
    <div onClick={()=>{navigate(`/product/${product.slug}`)}} className='card'>CArd

        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
    </div>
  )
}

export default Card