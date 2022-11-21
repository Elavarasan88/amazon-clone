import React from 'react'
import '../style/singleProduct.css'

const SingleProduct = (props) => {
  return (
    <div className='single_of_product'>
        <img alt='' className='single_img' src={props.image}></img>
        <h4><span>₹</span> {props.amount}</h4>
        <p>{props.name}</p>
        <small>{Array(props.ratings).fill(<span>⭐</span>)}</small>
        <button className='cart_button'>Add To Cart</button>
    </div>
  )
}

export default SingleProduct