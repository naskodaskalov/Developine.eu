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
      <div className='wrapper'>
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
            <p className='card-text'>{this.props.projectDescription}}</p>
            <a href={this.props.url} className='black-text d-flex flex-row-reverse'><h5 className='btn_read_more'>Browse it <i className='fa fa-chevron-right' /></h5></a>
          </div>
        </div>

        {/* <div className='card portfolio animated fadeIn'>
          <img className='img-fluid' src={this.props.imageLink} alt={this.props.imageAlt} />
          <div className='card-block'>
            <h4 className='card-title'>{this.props.projectName}</h4>
            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus blanditiis asperiores, nesciunt consequuntur voluptas veritatis distinctio necessitatibus eaque dolores non.</p>
            <a href='#' className='btn btn-primary'>Button</a>
          </div>
        </div> */}
      </div>
    )
  }
}

export default ProjectList
