import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom';




const hero = () => {

  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div className="hero-hand-icon">
            <p>New</p>
            <img src="pikachu.png" alt="" className='img_2' />
        </div>
        <p>collections</p>
        <p>for everyone</p>
      </div>
      <div className="hero-latest-btn">
        <div className='latest'><Link to="/Latest">Latest Collections</Link></div>
        <img src="right_icon.png" alt="" />
      </div>
      <div className="hero-right"></div>
    </div>
  )
}

export default hero
