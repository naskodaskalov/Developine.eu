import React, { Component } from 'react'

class Services extends Component {
  render () {
    return (
      <div className='services'>
        <div className='backend-service'>
          <img src={require('../Images/icon-backend.png')} alt='backend development by developine.eu' className='logo' />
          <ul>
            <li className='service-title'>
            Back-end development
          </li>
            <li className='current-service'>
            NodeJS & ExpressJS
          </li>
          </ul>
        </div>
        <div className='frontend-service'>
          <img src={require('../Images/icon-frontend.png')} alt='frontend development by developine.eu' className='logo' />
          <ul>
            <li className='service-title'>
              Front-end development
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
            <li className='current-service'>
              Wordpress
            </li>
          </ul>
        </div>

        {/* <ul>
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
        </ul> */}
      </div>
    )
  }
}

export default Services
