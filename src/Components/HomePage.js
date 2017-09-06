import React, { Component } from 'react'

import Services from './Services'

import './HomePage.css'

class HomePage extends Component {
  render () {
    let today = new Date()

    let BigDay = new Date('September 10, 2017')
    let msPerDay = 24 * 60 * 60 * 1000
    let timeLeft = (BigDay.getTime() - today.getTime())
    let eDaysLeft = timeLeft / msPerDay
    let daysLeft = Math.floor(eDaysLeft)
    let eHrsLeft = (eDaysLeft - daysLeft) * 24
    let hrsLeft = Math.floor(eHrsLeft)
    return (
      <div className='container-fluid wrapper'>

        <div className='last-projects'>
          <div className='card text-center pending-project'>
            <div className='card-header white-text'>
                Working on
              </div>
            <div className='card-body'>
              <h4 className='card-title'>Mario Shumanov Photographer</h4>
              <hr />
              <p className='card-text'>A portfolio web site of the bulgarian photographer Mario Shumanov.</p>
              <a className='btn btn-proj btn-sm' href='http://msphotographer.developine.eu' rel='noopener noreferrer' target='_blank'>Browse</a>
            </div>
            <div className='days-left white-text'>
              <p className='mb-0'>{daysLeft} days and {hrsLeft} hours left</p>
            </div>
          </div>
          <div className='card text-center last-project'>
            <div className='card-header white-text'>
                Last project
              </div>
            <div className='card-body'>
              <h4 className='card-title'>Catalea Research Engine</h4>
              <hr />
              <p className='card-text'>Catalea offers you the advantage of reading SEC filings online with easier-to-read text, faster navigation within a filing.</p>
              <a className='btn btn-proj btn-sm' href='http://cataleatradingreports.herokuapp.com/' rel='noopener noreferrer' target='_blank'>Browse</a>
            </div>
          </div>
        </div>

        <div className='self-present'>
          <div className='admin-img'>
            <img src={require('../Images/nd.jpg')} alt='nasko daskalov portret' />
          </div>
          <div className='admin-preview'>
            <h1>I am <strong>Nasko Daskalov</strong>, a <strong>freelance Web Developer</strong>, based in Sofia, Bulgaria. +1 year experience in developing with <strong>Javascript libraries like ReactJS</strong> and server-side development with NodeJS and ExpressJS. Also <strong>good knowledge of WordPress development</strong> and <strong>some knowledge of C# development and MSSQL Databases</strong>.</h1>
          </div>
        </div>

        <div className='provided-services'>
          <Services />
        </div>
      </div>
    )
  }
}

export default HomePage
