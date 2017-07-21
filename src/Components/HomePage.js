import React, { Component } from 'react'

import Services from './Services'

import './HomePage.css'

class HomePage extends Component {
  render () {
    return (
      <div className='container-fluid wrapper'>
        {/* <div className='about-me animated fadeIn'>
          <p>Hi :) I am <strong>Nasko Daskalov</strong>, a <strong>freelance Web Developer</strong>, based in Sofia, Bulgaria. +1 year experience in developing with <strong>Javascript libraries like NodeJS and ReactJS</strong>. Also <strong>good knowledge of WordPress development</strong> and <strong>some knowledge of C# development and MSSQL Databases</strong>.</p>
        </div> */}

        <div className='self-present'>
          <div className='admin-img'>
            <h1><img src={require('../Images/nd.jpg')} alt='nasko daskalov image' /></h1>
          </div>
          <div className='admin-preview'>
            I am <strong>Nasko Daskalov</strong>, a <strong>freelance Web Developer</strong>, based in Sofia, Bulgaria. +1 year experience in developing with <strong>Javascript libraries like NodeJS and ReactJS</strong>. Also <strong>good knowledge of WordPress development</strong> and <strong>some knowledge of C# development and MSSQL Databases</strong>.
          </div>
        </div>
        {/*
        <div>
          <Services />
        </div> */}
      </div>
    )
  }
}

export default HomePage
