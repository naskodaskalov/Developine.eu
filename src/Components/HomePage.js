import React, { Component } from 'react'

import Services from './Services'

import './HomePage.css'

class HomePage extends Component {
  render () {
    let today = new Date()

    let BigDay = new Date('September 14, 2017')
    let msPerDay = 24 * 60 * 60 * 1000
    let timeLeft = (BigDay.getTime() - today.getTime())
    let eDaysLeft = timeLeft / msPerDay
    let daysLeft = Math.floor(eDaysLeft)
    let eHrsLeft = (eDaysLeft - daysLeft) * 24
    let hrsLeft = Math.floor(eHrsLeft)
    return (
      <div className='container-fluid wrapper'>

        <div className='last-projects'>
          <div className='card text-center last-project'>
            <div className='card-header white-text'>
                    Latest Cryptos Tweets
                  </div>
            <div className='card-body'>
                <img src={require('../Images/latestcryptostweets.png')} alt='Electi Consulting' />
                <p>A place to check the lastest tweets from Bitcoin, Ethereum and Ripple. Also a search engine for other tweets.</p>
                <a className='btn btn-proj btn-sm' href='http://latestcryptostweets.eu/' rel='noopener noreferrer' target='_blank'>Browse</a>
              </div>
          </div>

          <div className='card text-center last-project'>
            <div className='card-header white-text'>
                Mr Santa Run
              </div>
            <div className='card-body'>
              <img src={require('../Images/mrsantarun.png')} alt='Mr. Santa Run' />
              <p>Design customizations. Developed Leaderboard connected to Firebase database.</p>
              <a className='btn btn-proj btn-sm' href='http://mrsantarun.developine.eu' rel='noopener noreferrer' target='_blank'>Browse</a>
            </div>
          </div>
        </div>

        <div className='self-present'>
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
    )
  }
}

export default HomePage
