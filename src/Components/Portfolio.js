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
              imageLink={require('../Images/catalea.png')} />
          </div>
          <div className='col-md-4'>
            <ProjectList
              url='http://obiavime.developine.eu'
              projectName='Obiavi.Me'
              imageLink={require('../Images/obiavime.png')} />
          </div>
          <div className='col-md-4'>
            <ProjectList
              url='http://ganyoexpress.developine.eu'
              projectName='GanyoExpress'
              imageLink={require('../Images/ganyoexpress.png')} />
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
