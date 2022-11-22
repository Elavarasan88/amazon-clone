import React from 'react'
import '../style/details.css'
import {useSelector} from 'react-redux';
import {useParams ,Link} from 'react-router-dom'

const Details = () => {
  const products = useSelector(state=>state.product);
  const cartProduct = useSelector(state=>state.price)
  let {id} = useParams();

  const singleProduct = products[id]

  return (
    <div>
      <div className='details'>
        <img className='details__image' src={singleProduct.image}></img>
        <div className='details__detail'>
          <h3>{singleProduct.name}</h3>
          <a href='#'>Visit the DZYN Furnitures Store</a>
          <h2>₹{singleProduct.amount}</h2>
          <div className='buttons'>
            <button className='cart_button'>Add to Cart</button>
            <button className='buy_button'>Buy Now</button>
          </div>
        </div>
        
      </div>
      <Link to = '/' className='details_footer'>Back To Home</Link>
    </div>
  )
}

export default Details