import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from '../Components/Navigation/Navigation'
import Footer from '../Components/Footer/Footer'
import Home from '../Pages/Home'
import Cart from '../Components/Cart/Cart'
import Products from '../Components/Products/Products'
import Checkout from '../Components/Checkout/Checkout'
import Orders from '../Components/Orders/Orders'
import Order_Details from '../Components/Orders/Order_Details'
import Product_Details from '../Components/Product_Details/Product_Details'

const Customer_Routes = () => {
  return (
     <div>
        <Navigation />
        <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Products/>} />
        <Route path='/chekout/' element={<Checkout/>} />
        <Route path='/account/orders' element={<Orders/>} />
        <Route path='/account/order/:orderId' element={<Order_Details/>} />
        <Route path='/product/:productId' element={<Product_Details/>} />
        </Routes>
        <Footer />
     </div>
  )
}

export default Customer_Routes