import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      status: 'available to hire'
    }
  }
  render () {
    let statusStyle = 'possibilityToHire'
    if (this.state.status !== 'available to hire') {
      statusStyle += ' notAvailable'
    }

    return (
      <div className='container-fluid header'>
        <Link to='/'>
          <img src={require('../../Images/developine-logo.png')} alt='developine logo' className='logo' />
        </Link>
        <nav>
          <span className='links'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/contact'>Contact</Link>
          </span>
        </nav>
        <span className={statusStyle}>{this.state.status}</span>
      </div>
    )
  }
}

export default Header
