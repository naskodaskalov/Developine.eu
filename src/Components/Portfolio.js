import React, {Component} from 'react'
import ProjectList from './ProjectList'
import projectsData from '../Data/ProjectsData'

class Portfolio extends Component {
  constructor (props) {
    super(props)

    this.state = {
      projects: []
    }
  }

  componentDidMount () {
    projectsData
      .getProjects()
      .then(projects => this.setState({ projects }))
  }
  render () {
    let projects = this.state.projects.sort((a, b) => b.id - a.id).map(project => (
      <div className='col-md-auto' key={project.id}>
        <ProjectList
          url={project.url}
          imageAlt={project.projectDescription}
          projectName={project.projectName}
          progress={project.progress}
          projectDescription={project.projectDescription}
          imageLink={project.imageLink} />
      </div>
    ))
    return (
      <div className='container-fluid wrapper'>
        <div className='row auto'>
          {projects}
        </div>
      </div>
    )
  }
}

export default Portfolio
