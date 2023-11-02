import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>The Shopper Website is mainly created for making onling shopping easy and interesting. 
             There are many collections for men, women and kids at affordable prices. Huge discounts are coming soon.
             Grab the opportunity and shop for your family and friends only on Shopper Website. Visit our website now and show your love for shopping.
            </p>
            <p>Heavy discounts with free shipping available. Terms and conditions applies.</p>
        </div>
    </div>
  )
}

export default DescriptionBox
