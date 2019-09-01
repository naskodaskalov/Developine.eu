import React, { Component } from 'react'

import projects from '../Data/ProjectsData'

import './LastProjects.css'

export default class LastProjects extends Component {
  constructor (props) {
    super(props)

    this.state = {
      projects: []
    }
  }

  componentDidMount () {
    projects
            .getProjects()
            .then(projects => this.setState({ projects }))
  }
  render () {
    let projectsArr = this.state.projects
    let projects = this.state.projects.slice(Math.max(projectsArr.length - 2, 1)).map(project => (
      <div className='card-body' key={project.id}>
        <img src={project.imageLink} alt={project.projectName} />
        <p>{project.projectDescription}</p>
        <a className='btn btn-proj' href={project.url} rel='noopener noreferrer' target='_blank'>Browse</a>
      </div>
        ))

    return (
      <div className='container-fluid'>
        <div className='text-center last-projects-container'>
          <div className='card-header white-text'>
                        Latest projects
                    </div>
          <div className='projects'>
            {projects}
          </div>
        </div>
      </div>
    )
  }
}
