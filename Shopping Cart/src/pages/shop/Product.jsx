import React from 'react'

function Product({...product}) {
  return (
  
    <div className='product'>
      <img src={product.productImage}alt="" />
      <div className='description'>
        <p>
          <b>{product.productName}</b>
        </p>
        <p>${product.price}</p>
      </div>
      <button className='addToCartBttn'> Add To Cart</button>
      </div>
  )
}

export default Product