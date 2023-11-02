import React from 'react'
import './Hero.css'
import hero_image from '../Assets/hero_image.png'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>New Arrivals Only</h2>
        <div>
            <div className='hero-hand-icon'>
                <p>new</p>
                <img src={hand_icon} alt=''/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className='hero-latest-button'>
            <div>Latest Collection</div>
            <img src={arrow} alt=''/>
        </div>
      </div>
      <div className='hero-right'>
        <img src={hero_image} alt=''/>
      </div>
    </div>
  )
}

export default Hero