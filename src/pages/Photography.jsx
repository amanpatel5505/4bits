import React from 'react'
import './Photographer.css'

const Photography = () => {
  return (
    <div>
      <div className='photographer'>
        <div className='text_1'>
          <p>Welcome!</p>
        </div>
        <div className='text_2'>
          <div className='im'>
            {' '}
            <p>I'm</p>
          </div>
          <div className='photo'>
            <p >Photographer</p>
          </div>
        </div>
        <div className='profession'>
          <ul className='profession'>
            <li>Photographer</li>
           <li className='dot'>.</li>
            <li>Chutiya</li>
           <li className='dot'>.</li>
            <li>Gandu</li>
          </ul>
        </div>
        <div className='reach'>
        <a href='http://instagram.com' target='_blank' rel="noopener noreferrer"><img src="facebook.png" alt=""  className='img_1'/></a>
        <a href='http://instagram.com' target='_blank' rel="noopener noreferrer"><img src="twitter.png" alt="" className='img_1' /></a>
        <a href='http://instagram.com' target='_blank' rel="noopener noreferrer"><img src="linkedin.png" alt=""  className='img_1'/></a>
        <a href='http://instagram.com' target='_blank' rel="noopener noreferrer"><img src="instagram.png" alt=""  className='img_1'/></a>
        </div>
        <div className="camera"><img src="cameras.png" alt="" /></div>
      </div>
    </div>
  )
}

export default Photography
