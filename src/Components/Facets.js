import React, { Component } from 'react'

import FacetButton from './FacetButton'

export default class Facets extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <FacetButton name='Conglomerates' onChangeEvent={this.props.onChange} />
          <FacetButton name='Consumer Goods' onChangeEvent={this.props.onChange} />
          <FacetButton name='Financial' onChangeEvent={this.props.onChange} />
          <FacetButton name='Healthcare' onChangeEvent={this.props.onChange} />
          <FacetButton name='Industrial Goods' onChangeEvent={this.props.onChange} />
          <FacetButton name='Services' onChangeEvent={this.props.onChange} />
          <FacetButton name='Technology' onChangeEvent={this.props.onChange} />
          <FacetButton name='Utilities' onChangeEvent={this.props.onChange} />
        </div>
      </div>
    )
  }
}
