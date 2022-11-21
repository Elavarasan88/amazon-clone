import React from 'react'
import "../style/productGroup.css"
import SingleProduct from './SingleProduct'
import GroupProduct from './GroupProduct'

const ProductGroup = () => {
  return (
    <div className='product_group'>
      <div className='group_product'>
        <GroupProduct/>
        <GroupProduct/>
        <GroupProduct/>
        <GroupProduct/>
      </div>
      <div className='single_product'>
        <SingleProduct
        image = "https://m.media-amazon.com/images/I/717lug1hSkL._AC_UL320_.jpg"
        name = "Hygear Mens Mens Shoes Sneaker"
        amount = {599}
        ratings = {4}
        />
        <SingleProduct
        image = "https://m.media-amazon.com/images/I/81pCvnfYHAL._AC_UL320_.jpg"
        name = "Diverse Men Cotton Shorts"
        amount = {299}
        ratings = {4}
        />
        <SingleProduct
        image = "https://m.media-amazon.com/images/I/81nVGpmCIwL._AC_UL320_.jpg"
        name = "Urban Forest Stag RFID Blocking Black/Red Leather Wallet for Men"
        amount = {479}
        ratings = {4}
        />
        <SingleProduct
        image = "https://m.media-amazon.com/images/I/61Q0R5cdxWL._AC_UL320_.jpg"
        name = "Noise ColorFit Pulse Grand Smart Watch with 1.69'(4.29cm) HD Display'"
        amount = {1998}
        ratings = {4}
        />
        <SingleProduct
        image = "https://m.media-amazon.com/images/I/81Z4Bu4c4bL._AC_UL320_.jpg"
        name = "Urban Forest Zeus Vintage Brown RFID Blocking Leather Wallet for Men"
        amount = {499}
        ratings = {4}
        />
        <SingleProduct
        image = "https://m.media-amazon.com/images/I/61w9ISMyhiL._AC_UL320_.jpg"
        name = "Sonata Analog Black Dial Men's Watch-NN7924NM01/NP7924NM01"
        amount = {1625}
        ratings = {4}
        />
        <SingleProduct
        image = "https://m.media-amazon.com/images/I/51QCXW-lhxL._AC_UL320_.jpg"
        name = "Okos Men's Jewellery 3D Cuboid Vertical Bar/Stick Stainless Steel"
        amount = {39}
        ratings = {4}
        />
        <SingleProduct
        image = "https://m.media-amazon.com/images/I/61PGRfoJCZL._AC_UL320_.jpg"
        name = "Yellow Chimes Rings for Men and Boys | Fashion Black Ring Set for Men"
        amount = {189}
        ratings = {4}
        />
        <SingleProduct
        image = "https://m.media-amazon.com/images/I/81kzaF24XjL._AC_UL320_.jpg"
        name = "CREATURE Reversible Pu-Leather Formal Belt For Men(Color-"
        amount = {279}
        ratings = {4}
        />
        <SingleProduct
        image = "https://m.media-amazon.com/images/I/51SzSJZtk8L._AC_UL320_.jpg"
        name = "Garnier Men, Face Wash, Brightening & Anti-Pollution,"
        amount = {242}
        ratings = {4}
        />
        <SingleProduct
        image = "https://m.media-amazon.com/images/I/41qzHeup+BL._AC_UL320_.jpg"
        name = "MEENAZ Titanium Stainless Steel Stylish adjustable size proposal Couple band thumb Silver"
        amount = {172}
        ratings = {4}
        />
        <SingleProduct
        image = "https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL320_.jpg"
        name = "ASIAN Men's Wonder-13 Sports Running Shoes"
        amount = {482}
        ratings = {4}
        />

      </div>
    </div>
  )
}

export default ProductGroup