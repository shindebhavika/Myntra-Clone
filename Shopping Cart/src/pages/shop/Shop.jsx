import React from 'react';
import { PRODUCTS } from '../../../products';
import Product from './Product'; // Assuming you have a Product component

function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
