// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import facebook from '../../assets/facebook_icon.png'
import twitter from '../../assets/twitter_icon.png'
import linkedin from '../../assets/linkedin_icon.png'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_content">
          <div className="content_left">
            <h2>Edukative</h2>
            <p>From beginners to advance learners, find courses that fit your leel and interests</p>
            <div className="social_icons">
              <img src={facebook} alt="social_icons" className='icons' />
              <img src={twitter} alt="social_icons" className='icons' />
              <img src={linkedin} alt="social_icons" className='icons' />
            </div>
          </div>        
          <div className="content_center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="content_right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>Phone: (+234) 80-546-676-72</li>
              <li>Email: support@Edukative-solution.com</li>    
              <li>Address: No 26 Roadman St, VI, Lagos</li>
            </ul>
          </div>
          </div>
          <hr />
          <p className="copyright">Copyright 2024 @Edukative. All right Reserved</p>
          </div>
    </div>
  )
}

export default Footer
