import React, { Component } from 'react'
import './HomePage.css'

import About from './About'

class HomePage extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <About />
      </div>
    )
  }
}

export default HomePage
