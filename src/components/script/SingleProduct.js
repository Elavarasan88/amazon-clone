import React from 'react'
import '../style/singleProduct.css'
import {useSelector} from 'react-redux'
import {Link, Params} from 'react-router-dom'

const SingleProduct = () => {
  const products = useSelector(state => state.product);
    
  return (
    <div className='single_product_set'>
    {
      products && products.map((product)=>(
          <Link className='link' key={product.id} to={`/details/${product.id}`}><div className='single_of_product'>
            <img alt='' className='single_img' src={product.image}></img>
            <h4><span>₹</span> {product.amount}</h4>
            <p>{product.name}</p>
            <small>{Array(product.ratings).fill(<span>⭐</span>)}</small>
            <button className='cart_button'>Add To Cart</button>
          </div>
          </Link>
      ))
    }
    </div>
  )
}

export default SingleProduct