// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
// import classroom from '../../assets/class.jpg'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <h1 className="hero_header">
          Unlock your Potential with Top-tier Online Courses
        </h1>
        <p>
          Personalized learning experience designed to help you achieve your professional personal goals.
        </p>
        <div className="btn">
          <button className="cta_button">Explore Courses</button>
        </div>
        {/* <img src={classroom} alt="hero_img" className='hero_img'/> */}
      </div>
    </div>
  )
}

export default Hero
