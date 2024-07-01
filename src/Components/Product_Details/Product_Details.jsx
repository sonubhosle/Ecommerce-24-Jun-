import React from 'react'
import './Style.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const Product_Details = () => {
    const navigate = useNavigate();

    const handleCart = () => {
        navigate('/cart')
    }
    return (
        <>
            <div className='product_details'>
                <div className="breadcrumb">
                    <Link>Home</Link>
                    <p>|</p>
                    <Link>Products</Link>
                    <p>|</p>
                    <Link>Mens</Link>
                    <p>|</p>
                    <Link>Men Regular Mid Rise Black Jeans</Link>
                </div>
                <div className="details_section">
                    <div className="product_images">
                        <div className="top_images">
                            <div className="main_image">
                            </div>
                            <div className="images_grids">
                                <div className="image"></div>
                                <div className="image"></div>
                                <div className="image"></div>
                                <div className="image"></div>
                            </div>
                        </div>
                        <div className="btns">
                            <button className='cart' onClick={handleCart}>Add To Card</button>
                            <button className='buy'>Buy Now</button>
                        </div>
                    </div>
                    <div className="product_info">
                        <div className="brand">LAHEJA</div>
                        <div className="title">Men Regular Mid Rise Black Jeans</div>
                        <div className="rating_reviews">
                            <div className="rating">4.5 <FaStar className='star' /> </div>
                            <div className="reviews">189 Reviews</div>
                        </div>
                        <div className="price_box-two">
                            <div className="price">&#8377;599</div>
                            <div className="original_price">&#8377;1999</div>
                            <div className="discount"> 70% Off</div>
                        </div>
                        <div className="stock_delivery">
                            <div className="delivery">Free delivery</div>
                            <div className="qty">In Stock</div>
                        </div>
                        <p>Colors : </p>
                        <div className="colors">
                            <div className="color bg-blue-800 "></div>
                            <div className="color bg-yellow-600"></div>
                            <div className="color bg-orange-800"></div>
                            <div className="color bg-pink-600"></div>
                        </div>
                        <p>Sizes</p>
                        <div className="sizes">
                            <button className="size">M</button>
                            <button className="size">X</button>
                            <button className="size">L</button>
                            <button className="size">XX</button>

                        </div>
                        <p>Description : </p>
                        <div className="dese">A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style</div>

                    </div>

                </div>
            </div>
            <div className="related_products">
            </div>
        </>
    )
}

export default Product_Details