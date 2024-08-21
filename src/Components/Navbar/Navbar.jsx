// eslint-disable-next-line no-unused-vars
import React from 'react'
import { SiEducative } from 'react-icons/si'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import Login from '../../pages/Login/Login'

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="navigation">
          <Link to= '/'>     
            <div className="nav_header">
              <div className="logo"><SiEducative/></div>
              <h2 className="nav_logo"><span>Edu</span>Kative</h2>
            </div>
          </Link>
          <div className="links">
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Courses</a></li>
            {/* <li><a href="#">Blog</a></li> */}
            <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div className="nav_button">
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/signup">
              <button>Register</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
