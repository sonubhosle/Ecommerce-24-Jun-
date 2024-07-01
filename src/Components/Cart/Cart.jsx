import React from 'react'
import './Style.css'
import { Button } from '@mui/material'
import { all_products } from '../Data/All_Products'
import Cart_Card from './Cart_Card'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

  const products = all_products.slice(0,5);

  const navigate = useNavigate()

  const handleCheckout = () => {
    navigate('/chekout?step=2')
}
 
  return (
    <div className='cart_section'>
      <div className="cart_items">
        <div className="top_header">
          <h1>Cart Items</h1>
          <button className="address">Add Address</button>
        </div>
        {
          products.map((item,index)=><Cart_Card products={item} key={index} />)
        }
      </div>
      <div className="price_details">
        <h2>PRICE DETAILS</h2>
        <div className="lines"></div>
        <div className="section">
          <div className="text">Price</div>
          <div className="count">₹1499</div>
        </div>
        <div className="section">
          <div className="text">Discount</div>
          <div className="count success">-₹1234</div>
        </div>
        <div className="section">
          <div className="text">Delivery Charge</div>
          <div className="count">Free</div>
        </div>
        <div className="lines"></div>

        <div className="section">
          <div className="text bold">Total Amount</div>
          <div className="count bold success">₹256</div>
        </div>
       <div className="lines"></div>
       <Button onClick={handleCheckout}  variant='contained' className='w-full' sx={{ px: '2rem', py: '.7rem', mt: "2rem", bgcolor: "#9155fd" }} >
        Checkout
      </Button>
      </div>
    </div>
  )
}

export default Cart