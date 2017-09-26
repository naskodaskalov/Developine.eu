import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

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
            <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
            <NavLink exact to='/about' activeClassName='selected'>About</NavLink>
            <NavLink exact to='/portfolio' activeClassName='selected'>Portfolio</NavLink>
            <NavLink exact to='/contact' activeClassName='selected'>Contact</NavLink>
          </span>
        </nav>
      </div>
    )
  }
}

export default Header
