import React from 'react'
import { Fragment } from 'react'
import './Home.css'
import iconSlide from '../../../public/image.png'

const Home = () => {
  return (
    <Fragment>
      <div 
        className='section presentation' 
        id='section-home'>
        <div 
          className='title animate__animated animate__slideInUp'>
          <h1 
            className='text-center'>
              JOSE ESAU MARTINEZ CONTRERAS
          </h1>
          <h2>
            Desarrollador WEB
          </h2>
        </div>
        <div 
          className='icon-slide animate__animated animate__pulse animate__infinite'>
          <a href={"#section-experience"}>
            <img 
              src={iconSlide} 
              alt="slide down"             
            />
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default Home