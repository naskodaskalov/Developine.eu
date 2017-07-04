import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
  render () {
    return (
      <div className='container-fluid header'>
        <Link to='/'>
          <img src={require('../Images/developine-logo.png')} alt='developine <logo></logo>' className='logo' />
        </Link>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </div>
    )
  }
}

export default Header
