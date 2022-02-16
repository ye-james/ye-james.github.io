import React from 'react'
import car from '../imgs/IMG_5914.jpg'
import program from '../imgs/program-1.jpg';
import man from '../imgs/man.jpg'

const Gallery = () => {
  return (
      <div className="gallery">
          <div className='gallery__column'>
            <figure className="gallery__thumb">
                  <img class="gallery__image" src={car} alt="Car photo"/>
            </figure>

            <figure className="gallery__thumb">
                  <img class="gallery__image" src={program} alt="a photo"/>
            </figure>
            
            <figure className="gallery__thumb">
                  <img class="gallery__image" src={man} alt="a second photo"/>
            </figure>
          </div>
          <div className='gallery__column'>
            <figure className="gallery__thumb">
                  <img class="gallery__image" src={car} alt="Car photo"/>
            </figure>

            <figure className="gallery__thumb">
                <img class="gallery__image" src={man} alt="a second photo"/>
            </figure>

            <figure className="gallery__thumb">
                  <img class="gallery__image" src={program} alt="a photo"/>
            </figure>
            
          </div>

    </div>
  )
}

export default Gallery