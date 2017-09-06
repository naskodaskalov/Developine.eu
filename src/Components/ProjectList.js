import React, { Component } from 'react'
import './ProjectList.css'

class ProjectList extends Component {
  render () {
    let progressStyle = 'badge '
    if (this.props.progress === 'Finished') {
      progressStyle += 'badge-success'
    } else if (this.props.progress === 'Under Construction') {
      progressStyle += 'badge-info'
    }
    return (
      <div>
        <div className='card'>
          <div className='view overlay hm-white-slight'>
            <img src={this.props.imageLink} className='img-fluid' alt={this.props.imageAlt} />
            <a>
              <div className='mask waves-effect waves-light' />
            </a>
          </div>
          <div className='card-block'>
            <div className='title-progress'>
              <h4 className='card-title'>{this.props.projectName}</h4><span className={progressStyle}>{this.props.progress}</span>
            </div>
            <hr />
            <p className='card-text'>{this.props.projectDescription}</p>
            <div className='d-flex  flex-row-reverse'>
              <a href={this.props.url} target='_blank' className='black-text'><span className='btn_read_more'>Browse it <i className='fa fa-chevron-right' /></span></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectList
