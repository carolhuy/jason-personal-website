import React from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'
// import './index.css'
// import './App.css';

function Navbar() {
  return (
    <>
    <nav alt="Navigation Bar">
        <Link to='/' alt="Link to Homepage">    
          <h2>home</h2>
        </Link>

        <Link to='/about' alt="Link to About Page">    
          <h2>about</h2>
        </Link>

        <Link to='/research' alt="Link to Research Page">    
          <h2>research</h2>
        </Link>

        <Link to='/writing' alt="Link to Writing Page">    
          <h2>writing</h2>
        </Link>

        <Link to='/contact' alt="Link to Contact Page">    
          <h2>contact</h2>
        </Link>
    </nav>
    <hr/>
    </>
  )
}

export default Navbar
