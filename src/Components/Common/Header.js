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
<<<<<<< HEAD
        <span className={statusStyle}><Link to='/contact'>{this.state.status}</Link></span>
=======
        <Link to='/contact'><span className={statusStyle}>{this.state.status}</span></Link>
>>>>>>> 5a9a2717e5355fb5313e60e3153ce475ce81dac5
      </div>
    )
  }
}

export default Header
