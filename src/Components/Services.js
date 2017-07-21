import React, { Component } from 'react'

class Services extends Component {
  render () {
    return (
      <div className='services'>
        <h2>What I am doing</h2>
        <ul>
          <li className='service-title'>
            Front-end
          </li>
          <li className='current-service'>
            HTML5 & CSS3
          </li>
          <li className='current-service'>
            Javascript
          </li>
          <li className='current-service'>
            ReactJS
          </li>
          <li className='service-title'>
            Back-end
          </li>
          <li className='current-service'>
            NodeJS & ExpressJS
          </li>
          <li className='service-title'>
            CMS
          </li>
          <li className='current-service'>
            Wordpress
          </li>
        </ul>
      </div>
    )
  }
}

export default Services
