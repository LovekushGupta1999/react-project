import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} data-aos="zoom-in" className="col-sm-6 col-md-4 mb-4">
          <div className="card h-100">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{ objectFit: 'cover', height: '320px' }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                {product.gender} - {product.category}<br />
                <strong>Brand:</strong> {product.brand}<br />
                <strong>Price:</strong> ${product.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
