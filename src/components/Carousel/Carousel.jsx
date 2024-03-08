import React, { useState, useEffect } from 'react'
import '../Carousel/Carousel.css'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const items = [
    'Notes.jpg',
    'fountain-pen-1851096.jpg',
    'hackathon.jpeg',
    'photo.png',
    'anime_fairy.jpg'
  ]

  const showSlider = type => {
    let itemSlider = document.querySelectorAll('.carousel .list .item')
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item')
    let listItem = document.querySelector('.carousel .list')
    let thumbnail = document.querySelector('.carousel .thumbnail')
    let carousel = document.querySelector('.carousel')

    if (type === 'next') {
      listItem.appendChild(itemSlider[0])
      thumbnail.appendChild(itemThumbnail[0])
      carousel.classList.add('next')
    } else {
      let positionLastItem = itemSlider.length - 1
      listItem.prepend(itemSlider[positionLastItem])
      thumbnail.prepend(itemThumbnail[positionLastItem])
      carousel.classList.add('prev')
    }
  }

  useEffect(() => {
    const next = document.getElementById('next')
    const prev = document.getElementById('prev')

    next.onclick = () => showSlider('next')
    prev.onclick = () => showSlider('prev')
  }, [])

  return (
    <div>
      <div
        className={`carousel ${
          currentIndex === items.length - 1 ? 'prev' : 'next'
        }`}
      >
        <div className='list'>
          <div class='item'>
            <img src='img1.jpg' alt='' />
            <div class='content'>
              <div class='title'>IMPORTANT</div>
              <div class='topic'>NOTES</div>
              <div class='des'>
                Explore expert advice and practical tips on effective sealing
                techniques for various applications. Enhance your knowledge to
                achieve optimal results in sealing solutions
              </div>
              <div class='buttons'>
                <button>SEE MORE </button>
              </div>
            </div>
          </div>
          <div class='item'>
            <img src='img2.jpg' alt='' />
            <div class='content'>
              <div class='title'>COMPLETE YOUR</div>
              <div class='topic'>PRACTICALS</div>
              <div class='des'>
                Unlock your academic and professional success with our Practical
                Writing Services. Our expert team specializes in creating clear,
                concise, and meticulously crafted practicals tailored to your
                specific requirements. Whether you're a student seeking academic
                excellence or a professional aiming for precision, trust us to
                deliver polished and insightful practicals that make a lasting
                impact. Elevate your work with our dedicated writing expertise.
              </div>
              <div class='buttons'>
                <button>SEE MORE </button>
              </div>
            </div>
          </div>
          <div class='item'>
            <img src='img3.jpg' alt='' />
            <div class='content'>
              <div class='title'>HACKATHON </div>
              <div class='topic'>CLUB</div>
              <div class='des'>
                Join our vibrant Hackathon Club, where innovation meets
                collaboration! Dive into a dynamic community of passionate
                problem-solvers, coding enthusiasts, and creative minds. We host
                exciting hackathons that challenge your skills, foster teamwork,
                and ignite your creativity. Whether you're a coding prodigy or a
                curious beginner, our club is the perfect space to learn, build,
                and connect with like-minded individuals. Unleash your
                potential, tackle real-world challenges, and be part of a
                supportive community that thrives on pushing boundaries."
              </div>
              <div class='buttons'>
                <button>SEE MORE </button>
              </div>
            </div>
          </div>
          <div class='item'>
            <img src='anime_fairy.jpg' alt='' />
            <div class='content'>
              <div class='title'>ANIME</div>
              <div class='topic'>ACCESSORIES</div>
              <div class='des'>
                Explore our Anime Accessories Collection - a fusion of style and
                fandom! From vibrant character-inspired apparel to sleek tech
                accessories adorned with your favorite anime motifs, our curated
                selection caters to every otaku's taste. Elevate your anime
                passion with trendy phone cases, stylish apparel, and quirky
                stationery that proudly showcase your love for the animated
                world. Embrace your inner anime enthusiast with our unique and
                high-quality accessories that bring a touch of your favorite
                shows into your everyday life."
              </div>
              <div class='buttons'>
                <button>SEE MORE </button>
                <button>BUY</button>
              </div>
            </div>
          </div>
          <div class='item'>
            <img src='img4.jpg' alt='' />
            <div class='content'>
              <div class='title'>CAPTURE YOUR MOMENTS </div>
              <div class='topic'>By PRIYANSHU</div>
              <div class='des'>
                Welcome to 'Captured Moments,' where each click tells a story.
                As a passionate photographer, I specialize in transforming
                fleeting moments into timeless memories. Explore a portfolio
                that blends artistry, creativity, and technical finesse to
                deliver stunning visuals. Whether it's portrait sessions,
                events, or landscapes, I am dedicated to capturing the essence
                of every moment. Join me on a visual journey, where every frame
                tells a unique story.
              </div>
              <div class='buttons'>
                <button>SEE MORE </button>
                <button>BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>

        <div className='thumbnail'>
          <div class='item'>
            <img src='img1.jpg' alt='' />
            <div class='content'>
              <div class='title'>NOTES</div>
              <div class='description'></div>
            </div>
          </div>
          <div class='item'>
            <img src='img2.jpg' alt='' />
            <div class='content'>
              <div class='description'></div>
            </div>
          </div>
          <div class='item'>
            <img src='img3.jpg' alt='' />
            <div class='content'>
              <div class='description'></div>
            </div>
          </div>
          <div class='item'>
            <img src='anime_fairy.jpg' alt='' />
            <div class='content'>
              <div class='title'>Hackathon</div>
              <div class='description'></div>
            </div>
          </div>
          <div class='item'>
            <img src='img4.jpg' alt='' />
            <div class='content'>
              <div class='title'>Anime</div>
              <div class='description'></div>
            </div>
          </div>
        </div>

        <div className='arrows'>
          <button id='prev'>
            <span>{'<'}</span>
          </button>
          <button id='next'>
            <span>{'>'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
