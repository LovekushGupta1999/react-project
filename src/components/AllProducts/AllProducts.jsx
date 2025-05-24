
import React, { useState } from 'react';
import './styles.css';
import productsData from './productsData';
import FilterSidebar from './FilterSidebar';
import ProductList from './ProductList';

function AllProducts() {
  const [filters, setFilters] = useState({
    gender: [],
    category: [],
    brand: [],
    price: 200,
  });

  const filterProducts = (products) => {
    return products.filter(product => {
      const matchGender = filters.gender.length ? filters.gender.includes(product.gender) : true;
      const matchCategory = filters.category.length ? filters.category.includes(product.category) : true;
      const matchBrand = filters.brand.length ? filters.brand.includes(product.brand) : true;
      const matchPrice = product.price <= filters.price;
      return matchGender && matchCategory && matchBrand && matchPrice;
    });
  };

  return (
    <div className="container">
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <ProductList products={filterProducts(productsData)} />
    </div>
  );
}

export default AllProducts;
