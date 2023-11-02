import React, { useContext } from 'react'
import './CartItems.css'
import { Shopcontext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {all_product, cartItems, removeFromCart, getCartTotalValue} = useContext(Shopcontext)
  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {all_product.map((e) => {
        if(cartItems[e.id] > 0) {
            return <div>
            <div className='cartitems-format cartitems-format-main'>
                <img src={e.image} alt='' className='carticon-imageicon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='cartitems-removeicon' src={remove_icon} alt='' onClick={() => {removeFromCart(e.id)}}/>
            </div>
            <hr/>
          </div>
        }
         return null;
      })}
      <div className='cartitems-dowm'>
        <div className='cartitems-total'>
          <h1>cart total</h1>
          <div>
            <div className='cartitems-total-items'>
              <p>Subtotal</p>
              <p>${getCartTotalValue()}</p>
            </div>
            <hr/>
            <div className='cartitems-total-items'>
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr/>
            <div className='cartitems-total-items'>
              <h3>Total</h3>
              <h3>${getCartTotalValue()}</h3>
            </div>
          </div>
          <button>Proceed to Checkout</button>
        </div>
        <div className='promocode'>
          <p>If you have a promocode, enter here</p>
          <div className='promobox'>
            <input type='text' placeholder='Promocode'></input>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
