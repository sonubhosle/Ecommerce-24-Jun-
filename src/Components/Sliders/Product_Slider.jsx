import React from 'react'
import './Style.css'
import Carousel from "react-multi-carousel";
import {FaHeart} from 'react-icons/fa'
import "react-multi-carousel/lib/styles.css";
import {Link} from 'react-router-dom'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const Product_Slider = ({products,heading}) => {
  return (
  <>
  <div className="section_heading">{heading}</div>
   <div className="product_carousel">
   <Carousel responsive={responsive} className='carousel'>
     {
        products.map((product,index)=>{
            return(
                <div className="carousel_card">
                <div className="image">
                <img src={product.imageUrl} alt="image" />
                </div>
              <div className="product_info">
                <div className="brand">{product.brand}</div>
                <div className="title">{product.title}</div>
                <div className="price_box">
                  <div className="price">&#8377;{product.discountedPrice}</div>
                  <div className="original_price">&#8377;{product.price}</div>
                  <div className="discount">{product.discountPersent}% Off</div>
                </div>
              </div>
              <div className="hover_btns">
                <Link><FaHeart size={20}  color='#575757'/></Link>
                <Link><FaHeart size={20}  color='#575757'/></Link>

              </div>
            </div>
            )
        })
     }
 
     </Carousel>
   </div>
  </>
  )
}

export default Product_Slider