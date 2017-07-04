import React, { Component } from 'react'

import './Footer.css'

class Footer extends Component {
  render () {
    return (
      <div className='footer container-fluid'>
        <div className='row'>
          <div className='col-md-3 offset-md-1'>
            <h5 className='title'>Social Links</h5>
            <ul>
              <li><a href='https://www.facebook.com/nasko.daskalov'><i className='fa fa-facebook-square' /> Facebook</a></li>
              <li><a href='https://github.com/naskodaskalov'><i className='fa fa-github-square' /> GitHub</a></li>
              <li><a href='https://www.upwork.com/o/profiles/users/_~018374ab3cba0fc563/'><i className='fa fa-external-link' /> Upwork</a></li>
              <li><a href='https://www.instagram.com/mrdaskalov/'><i className='fa fa-instagram' /> Instagram</a></li>
            </ul>
          </div>

          <div className='col-md-3 offset-md-1'>
            <h5 className='title'>Used technologies</h5>
            <ul>
              <li>NodeJS</li>
              <li>ReactJS</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          <div className='col-md-3 offset-md-1'>
            <h5 className='title'>Last 3 Projects</h5>
            <ul>
              <li><a href='http://cataleatradingreports.herokuapp.com'>Catalea Research Engine</a></li>
              <li><a href='http://ganyoexpress.developine.eu'>GanyoExpress (University Project)</a></li>
              <li><a href='http://obiavime.developine.eu'>Obiavi.Me (University Project)</a></li>
            </ul>
          </div>

        </div>

        <div className='footer-copyright'>
          <div className='container-fluid'>2017 © <a href='https://www.developine.eu'>Design and Code: Nasko Daskalov</a></div>
        </div>
      </div>
    )
  }
}

export default Footer
