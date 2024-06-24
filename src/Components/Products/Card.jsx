import React from 'react'
import { FaHeart, FaStar } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const Card = ({ product, indx }) => {

  const navigate = useNavigate()

  const handleProductDetails =  () =>{
     navigate(`/product/${product.id}`)
  }
  return (
    <div onClick={handleProductDetails} className='card' key={indx}>
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
        <div className="rate_qty">
          <div className="rating">4.5 <FaStar /></div>
          <div className="quantity">Stock : {product.quantity}</div>
        </div>
      </div>
      <div className="hover_btns">
        <Link><FaHeart size={20} color='#575757' /></Link>
        <Link><FaHeart size={20} color='#575757' /></Link>

      </div>
    </div>
  )
}

export default Card