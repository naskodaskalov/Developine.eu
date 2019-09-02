import React, { Component } from 'react'
import './HomePage.css'

import News from './News'
import Facets from './Facets'

class HomePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedFacet: ''
    }

    this.handleFacetChange = this.handleFacetChange.bind(this)
  }

  handleFacetChange (event) {
    this.setState({ selectedFacet: event.target.value })
  }
  render () {
    return (
      <div className='container-fluid'>
        {/* <Facets onChange={this.handleFacetChange} /> */}
        <News selectedFacet={this.state.selectedFacet} />
      </div>
    )
  }
}

export default HomePage
