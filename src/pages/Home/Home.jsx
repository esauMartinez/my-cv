import React from 'react'
import { Fragment } from 'react'
import './Home.css'
import { BsChevronDoubleDown } from 'react-icons/bs'

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
              RECAWI
          </h1>
          <h2>
            Desarrollador WEB
          </h2>
        </div>
        <div 
          className='icon-slide animate__animated animate__pulse animate__infinite'>
          <a href={"#section-services"}>
            <BsChevronDoubleDown/>
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default Home