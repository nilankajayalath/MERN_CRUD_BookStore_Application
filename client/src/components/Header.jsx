import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import logo from '../assets/nbook.png';

function Header() {
  return (
    <header>

        <Link to="/" className='logo'>
           <img src={logo} alt='Reactjs' style={{ width: '80px', height: '90px' }} />BookStore
        </Link>

        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    </header>
  )
}

export default Header
