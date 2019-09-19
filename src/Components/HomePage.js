import React, { Component } from 'react'
import './HomePage.css'

import News from './News'

class HomePage extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <News />
      </div>
    )
  }
}

export default HomePage
