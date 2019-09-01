import React, { Component } from 'react'

import Services from './Services'
import LastProjects from './LastProjects'

import './HomePage.css'

class HomePage extends Component {
  render () {
    return (
      <div className='container-fluid wrapper'>

        <div className='self-present'>
          <div className='personal-block'>
            <div className='admin-img'>
              <img src={require('../Images/nd.jpg')} alt='nasko daskalov portret' />
            </div>
            <div className='admin-preview'>
              <h1>I am <strong>Nasko Daskalov</strong>, a <strong>freelance Web Developer</strong>, based in Sofia, Bulgaria. +2 year experience in developing with <strong>Javascript libraries like ReactJS</strong> and server-side development with NodeJS and ExpressJS. Also <strong>good knowledge of WordPress development</strong> and <strong>MSSQL Databases</strong>.<br />
              Working as a <strong>Front-end developer at Dynamicweb</strong> since the middle of 2018.</h1>
            </div>
          </div>

          <div className='provided-services'>
            <Services />
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
