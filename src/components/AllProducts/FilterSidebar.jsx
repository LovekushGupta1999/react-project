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
      setFilters(prev => ({ ...prev, [name]: Number(value) }));
    }
  };

  return (
    <div className="p-3 border rounded bg-light">
      <h5>Filters</h5>

      {/* Gender */}
      <div className="mb-3">
        <strong>Gender</strong><br />
        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="gender" value="Men" onChange={handleChange} />
          <label className="form-check-label">Men</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="gender" value="Women" onChange={handleChange} />
          <label className="form-check-label">Women</label>
        </div>
      </div>

      {/* Category */}
      <div className="mb-3">
        <strong>Category</strong><br />
        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="category" value="Shoes" onChange={handleChange} />
          <label className="form-check-label">Shoes</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="category" value="Clothing" onChange={handleChange} />
          <label className="form-check-label">Clothing</label>
        </div>
      </div>

      {/* Brand */}
      <div className="mb-3">
        <strong>Brand</strong><br />
        {['Nike', 'Adidas', 'Puma', 'Under Armour'].map((brand) => (
          <div className="form-check" key={brand}>
            <input className="form-check-input" type="checkbox" name="brand" value={brand} onChange={handleChange} />
            <label className="form-check-label">{brand}</label>
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="mb-3">
        <strong>Max Price: ${filters.price}</strong>
        <input
          type="range"
          className="form-range"
          name="price"
          min="0"
          max="200"
          value={filters.price}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
