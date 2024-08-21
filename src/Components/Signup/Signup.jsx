// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
// import Navbar from './Navbar';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', email, password, confirmPassword);
  };

  return (
    <div>
      <div className="container">
        <div className="registration form">
          <header>Signup</header>
          <form onSubmit={handleRegistration}>
            <input
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Create A Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input type="submit" className="button" value="Sign up" />
          </form>
          <div className="signup">
            <span className="signup">
              Already have an account
              <Link to="/login">Login</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;