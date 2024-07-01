import React, { useState } from 'react';
import Card from './Card';
import './Style.css';
import { FiSearch } from 'react-icons/fi';

const Home_Products = ({ products, heading,searchTerm }) => {

  return (
    <>
     
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
