import React, { Component } from 'react'
import './HomePage.css'

class HomePage extends Component {
  render () {
    return (
      <div className='container-fluid wrapper'>
        <div className='card card-info text-center z-depth-2'>
          <div className='card-block'>
            <p className='white-text'><h1>Under construction!</h1></p>
            <p className='white-text'><em>Deadline: 15.07.17</em></p>
          </div>
        </div>

        <div className='about-me animated fadeIn'>
          <p>Hi :) I am <strong>Nasko Daskalov</strong>, a <strong>freelance Web Developer</strong>, based in Sofia, Bulgaria. +1 year experieced in developing with <strong>Javascript libraries like NodeJS and ReactJS</strong>. Also some knowledges on C# development and MSSQL Databases.</p>
        </div>

      </div>
    )
  }
}

export default HomePage
