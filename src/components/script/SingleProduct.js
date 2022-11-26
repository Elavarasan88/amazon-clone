import React from 'react'
import '../style/singleProduct.css'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addCart } from '../../feautures/cart/cartSlice';

const SingleProduct = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product);
    
  return (
    <div className='single_product_set'>
    {
      products && products.map((product,index)=>(
        <div key={index}>
          <li  className='single_of_product'>
            <Link className='link'  to={`/details/${product.id}`}><img alt='' className='single_img' src={product.image}></img></Link>
            <h4><span>₹</span> {product.amount}</h4>
            <p>{product.name}</p>
            <small>{Array(product.ratings).fill(<span>⭐</span>)}</small>
            <button onClick={()=>{dispatch(addCart(product))}} className='cart_button'>Add To Cart</button>
          </li>
          </div>
          
      ))
    }
    </div>
  )
}

export default SingleProduct