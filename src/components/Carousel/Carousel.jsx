
import React, { useState, useEffect } from 'react';
import '../Carousel/Carousel.css'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    'Notes.jpg',
    'fountain-pen-1851096.jpg',
    'hackathon.jpeg',
    'photo.png',
    'anime_fairy.jpg',
  ];

  const showSlider = (type) => {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
    let listItem = document.querySelector('.carousel .list');
    let thumbnail = document.querySelector('.carousel .thumbnail');
    let carousel = document.querySelector('.carousel');

    if (type === 'next') {
      listItem.appendChild(itemSlider[0]);
      thumbnail.appendChild(itemThumbnail[0]);
      carousel.classList.add('next');
    } else {
      let positionLastItem = itemSlider.length - 1;
      listItem.prepend(itemSlider[positionLastItem]);
      thumbnail.prepend(itemThumbnail[positionLastItem]);
      carousel.classList.add('prev');
    }
  };

  useEffect(() => {
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');

    next.onclick = () => showSlider('next');
    prev.onclick = () => showSlider('prev');
  }, []);

  return (
    <div>
      <div className={`carousel ${currentIndex === items.length - 1 ? 'prev' : 'next'}`}>
        <div className="list">
        <div class="item">
             <img src="Notes.jpg" alt=""/>
            <div class="content">
                 <div class="available">yes</div>
                 <div class="people">2</div>
                 <div class="description"></div>
                 <div class="buttons">
                     <button>SEE MORE </button><button>SUBSCRIBE</button>
                 </div>
             </div>
         </div>
         <div class="item">
             <img src="fountain-pen-1851096.jpg" alt=""/>
             <div class="content">
                 <div class="available">yes</div>
                 <div class="people">2</div>
                 <div class="description"></div>
                 <div class="buttons">
                     <button>SEE MORE </button><button>SUBSCRIBE</button>
                 </div>
             </div>
         </div>
         <div class="item">
             <img src="hackathon.jpeg" alt=""/>
             <div class="content">
                 <div class="available">yes</div>
                 <div class="people">2</div>
                 <div class="description"></div>
                 <div class="buttons">
                     <button>SEE MORE </button><button>SUBSCRIBE</button>
                 </div>
             </div>
         </div>
         <div class="item">
             <img src="photo.png" alt=""/>
             <div class="content">
                 <div class="available">yes</div>
                 <div class="people">2</div>
                 <div class="description"></div>
                 <div class="buttons">
                     <button>SEE MORE </button><button>SUBSCRIBE</button>
                 </div>
             </div>
         </div>
         <div class="item">
             <img src="anime_fairy.jpg" alt=""/>
             <div class="content">
                 <div class="available">yes</div>
                 <div class="people">2</div>
                 <div class="description"></div>
                 <div class="buttons">
                     <button>SEE MORE </button><button>SUBSCRIBE</button>
                 </div>
             </div> 
         </div>
        </div>

        <div className="thumbnail">
        <div class="item">
             <img src="Notes.jpg" alt=""/>
            <div class="content">
                 <div class="available">yes</div>
                 <div class="people">2</div>
                 <div class="description"></div>
                 <div class="buttons">
                     <button>SEE MORE </button><button>SUBSCRIBE</button>
                 </div>
             </div>
         </div>
         <div class="item">
             <img src="fountain-pen-1851096.jpg" alt=""/>
             <div class="content">
                 <div class="available">yes</div>
                 <div class="people">2</div>
                 <div class="description"></div>
                 <div class="buttons">
                     <button>SEE MORE </button><button>SUBSCRIBE</button>
                 </div>
             </div>
         </div>
         <div class="item">
             <img src="hackathon.jpeg" alt=""/>
             <div class="content">
                 <div class="available">yes</div>
                 <div class="people">2</div>
                 <div class="description"></div>
                 <div class="buttons">
                     <button>SEE MORE </button><button>SUBSCRIBE</button>
                 </div>
             </div>
         </div>
         <div class="item">
             <img src="photo.png" alt=""/>
             <div class="content">
                 <div class="available">yes</div>
                 <div class="people">2</div>
                 <div class="description"></div>
                 <div class="buttons">
                     <button>SEE MORE </button><button>SUBSCRIBE</button>
                 </div>
             </div>
         </div>
         <div class="item">
             <img src="anime_fairy.jpg" alt=""/>
             <div class="content">
                 <div class="available">yes</div>
                 <div class="people">2</div>
                 <div class="description"></div>
                 <div class="buttons">
                     <button>SEE MORE </button><button>SUBSCRIBE</button>
                 </div>
             </div>
         </div>
        </div>

        <div className="arrows">
          <button id="prev">prev</button>
          <button id="next">next</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;


