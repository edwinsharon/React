import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <div className='main-nav'>
        <div className='logo'>
            <h1>Aroma</h1>

        </div>
        <div className='menu'>
            <ul>
                <li>
                    <Link to='/' className='nav-item'>Home</Link>
                </li>
                <li>
                    <Link to='/about' className='nav-item'>About</Link>
                </li>
                <li>
                    <Link to='/contact' className='nav-item'>Contact</Link>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
