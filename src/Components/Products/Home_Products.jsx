import React, { useState } from 'react';
import Card from './Card';
import './Style.css';
import { FiSearch } from 'react-icons/fi';

const Home_Products = ({ products, heading }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <div className="search_bar">
        <input
          type="text"
          placeholder="Search products"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
       <button> <FiSearch /></button>
      </div>
      <div className="section_heading">{heading}</div>
      <div className="products_grid">
        {products
          .filter((prod) => {
            if (searchTerm === '') {
              return prod;
            } else if (prod.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return prod;
            }
            return false;
          })
          .map((item, index) => (
            <Card product={item} indx={index} key={index} />
          ))}
      </div>
    </>
  );
};

export default Home_Products;
