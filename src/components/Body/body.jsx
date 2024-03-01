import React from 'react'
import './Body.css'

const body = () => {
  return (
    <>
      <div className='body'>
        <div>
          {' '}
          <h1>Central Hub</h1>
        </div>
        <div className='home'>
          <div className='content'>
            <img src='Notes.jpg' alt='notes' />
            <div className='info'>
              {' '}
              <h2>Download Notes</h2>
            </div>
          </div>
          <p>Get Your Notes in 1 min</p>
          <p>200+ Notes</p>
          <div className='content'>
            <img src='fountain-pen-1851096.jpg' alt='practicals' />
            <div className='info'>
              {' '}
              <h2>Practicals</h2>
            </div>
          </div>
          <p>Make people do your work</p>
          <p>15+ Handwritings with sample paper</p>
          <div className='content'>
            <img src='hackathon.jpeg' alt='hackathon' />
            <div className='info'>
              {' '}
              <h2>Hackathon & quizzes</h2>
            </div>
          </div>
          <p>Win prizes and get hired</p>
          <p>Weekly Events</p>
          <div className='content'>
            <img src='photo.png' alt='photography' />
            <div className='info'>
              {' '}
              <h2>Book a photographer</h2>
            </div>
          </div>
          <p>photoshoot for your event</p>
          <p>10+ photographers</p>
          <div className='content'>
            <img src='anime_fairy.jpg' alt='Anime' />
            <div className='info'>
              {' '}
              <h2>Anime sticker shop</h2>
            </div>
          </div>
          <p>Add some fun to your daily life</p>
          <p>1000+ anime stickers available</p>
        </div>
      </div>
    </>
  )
}

export default body
