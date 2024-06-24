import React from 'react'
import Card from './Card'
import './Style.css'
const Home_Products = ({products,heading}) => {
  return (
    <> 
    <div className="section_heading">{heading}</div>
    <div className='products_grid' >
      {
        products.map((item,index) =><Card product={item} indx={index} />)
      }
    </div>
    </>
  )
}

export default Home_Products