import React from 'react'
import { FaPlus,FaMinus } from "react-icons/fa";

const Cart_Card = ({products}) => {
  return (
    <div className='cart_card'>
      <div className="image">
        <img src={products.imageUrl} alt="" />
      </div>
      <div className="product_data">
        <div className="name">{products.title}</div>
        <div className="brand">{products.brand}</div>
        <div className="price_data">
          <div className="discounted_price">₹{products.discountedPrice}</div>
          <div className="price">₹{products.price}</div>
          <div className="discounted_persent">{products.discountPersent}% Off</div>
        </div>
        <div className="buttons">
          <button><FaMinus size={12} /></button>
          <p>1</p>
          <button><FaPlus size={12} /></button>
        </div>
      </div>

    </div>
  )
}

export default Cart_Card