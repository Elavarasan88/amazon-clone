import React from 'react'
import ProductGroup from './ProductGroup'
import SecondHeader from './SecondHeader'
import Slick from './Slick'
import '../style/home.css'

const Home = () => {
  return (
    <div>
        <SecondHeader/>
        <Slick/>
        <ProductGroup/>   
    </div>
  )
}

export default Home