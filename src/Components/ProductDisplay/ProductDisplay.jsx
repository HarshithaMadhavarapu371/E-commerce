import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png'
import { Shopcontext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(Shopcontext)
  return (
    <div className='product-display'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
        </div>
        <div className='productdisplay-img'>
            <img className='productdisplay-main-img' src={product.image} alt=''/>
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_dull_icon} alt=''/>
            <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>
            <div className='productdisplay-oldprice'>${product.old_price}</div>
            <div className='productdisplay-newprice'>${product.new_price}</div>
        </div>
        <div className='productdisplay-description'>
            A lightweight, usually knitted, pullover shirt, close-fitting and with 
            a round neckline and short sleeves worn asan underskirt or outer
            garment.
        </div>
        <div className='productdisplay-size'>
            <h1>Select size</h1>
            <div className='productdisplay-sizes'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-category'><span>Category :</span>Women, T-shirt, Crop-top</p>
        <p className='productdisplay-category'><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
