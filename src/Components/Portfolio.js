import React, {Component} from 'react'
import ProjectList from './ProjectList'

class Portfolio extends Component {
  render () {
    return (
      <div className='container-fluid wrapper'>
        <div className='row auto'>
          <div className='col-md-4'>
            <ProjectList
              url='http://cataleatradingreports.herokuapp.com'
              projectName='Catalea Research Engine'
              progress='Under Construction'
              projectDescription='Catalea offers you the advantage of reading SEC filings online with easier-to-read text, faster navigation within a filing.'
              imageLink={require('../Images/catalea.png')} />
          </div>
          <div className='col-md-4'>
            <ProjectList
              url='http://obiavime.developine.eu'
              projectName='Obiavi.Me'
              progress='Finished'
              projectDescription='A project made during a course in Software University. Used technologies: HTML, PHP, MySQL Database'
              imageLink={require('../Images/obiavime.png')} />
          </div>
          <div className='col-md-4'>
            <ProjectList
              url='http://ganyoexpress.developine.eu'
              projectName='GanyoExpress'
              progress='Finished'
              projectDescription='A project made during a course in Software University. Used technologies: ReactJS, Bootstrap, Kinvey Database'
              imageLink={require('../Images/ganyoexpress.png')} />
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
