import React from 'react';

const FilterSidebar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFilters(prev => ({
        ...prev,
        [name]: checked ? [...prev[name], value] : prev[name].filter(v => v !== value),
      }));
    } else {
      setFilters(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="sidebar">
      <h3>Filter</h3>
      <div>
        <strong>Gender</strong><br />
        <input type="checkbox" name="gender" value="Men" onChange={handleChange} /> Men<br />
        <input type="checkbox" name="gender" value="Women" onChange={handleChange} /> Women
      </div>
      <div>
        <strong>Category</strong><br />
        <input type="checkbox" name="category" value="Shoes" onChange={handleChange} /> Shoes<br />
        <input type="checkbox" name="category" value="Clothing" onChange={handleChange} /> Clothing
      </div>
      <div>
        <strong>Brand</strong><br />
        <input type="checkbox" name="brand" value="Nike" onChange={handleChange} /> Nike<br />
        <input type="checkbox" name="brand" value="Adidas" onChange={handleChange} /> Adidas<br />
        <input type="checkbox" name="brand" value="Puma" onChange={handleChange} /> Puma<br />
        <input type="checkbox" name="brand" value="Under Armour" onChange={handleChange} /> Under Armour
      </div>
      <div>
        <strong>Max Price</strong><br />
        <input
          type="range"
          name="price"
          min="0"
          max="200"
          value={filters.price}
          onChange={handleChange}
        />
        <span> ${filters.price}</span>
      </div>
    </div>
  );
};

export default FilterSidebar;
