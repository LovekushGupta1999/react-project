import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="products">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h4>{product.name}</h4>
          <p>{product.gender} - {product.category}</p>
          <p>Brand: {product.brand}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
