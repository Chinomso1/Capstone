// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail && loginPassword) {
      // Call API to login user
      console.log('Login successful');
    } else {
      setLoginError('Please enter email and password');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (signupEmail && signupPassword && confirmPassword) {
      if (signupPassword === confirmPassword) {
        // Call API to signup user
        console.log('Signup successful');
      } else {
        setSignupError('Passwords do not match');
      }
    } else {
      setSignupError('Please enter all fields');
    }
  };

  return (
    <div className="container">
      <input type="checkbox" id="check" />
      <div className="login form">
        <header>Sign In</header>
        <form action="#" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
          <a href="#">Forgot Password</a>
          <input type="submit" className="button" value="Login" />
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        </form>
        <div className="signup">
        <span>
          Don&apos;t have an account?
          <label htmlFor="check">Register</label>
        </span>
        </div>
        <Link to="/" style={{ display: 'flex', justifyContent: 'center' }}>Home Page</Link>
      </div>
      <div className="registration form">
        <header>Signup</header>
        <form action="#" onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Create A Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <input type="submit" className="button" value="Sign up" />
          {signupError && <p style={{ color: 'red' }}>{signupError}</p>}
        </form>
        <div className="signup">
          <span>
            Already have an account
            <label htmlFor="check">Login</label>
          </span>
          <Link to="/" style={{ display: 'flex', justifyContent: 'center' }}>Home Page</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;