import React from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'
// import './index.css'
// import './App.css';

function Navbar() {
  return (
    <>
    <nav className='navStyle' alt="Navigation Bar">
        <Link to='/' alt="Link to Homepage">    
          <h1 className='column'>home</h1>
        </Link>

        <Link to='/about' alt="Link to About Page">    
          <h1 className='column'>about</h1>
        </Link>

        <Link to='/research' alt="Link to Research Page">    
          <h1 className='column'>research</h1>
        </Link>

        <Link to='/writing' alt="Link to Writing Page">    
          <h1 className='column'>writing</h1>
        </Link>

        <Link to='/contact' alt="Link to Contact Page">    
          <h1 className='column'>contact</h1>
        </Link>
    </nav>
    <hr/>
    </>
  )
}

export default Navbar
