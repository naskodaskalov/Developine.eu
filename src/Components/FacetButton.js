import React, { Component } from 'react'

export default class FacetButton extends Component {
  render () {
    return (
      <label className='btn btn-light'>
        <input
          type='radio'
          name='options'
          className='invisible'
          id={this.props.name}
          value={this.props.name}
          onChange={this.props.onChangeEvent}
          />
        {this.props.name}
      </label>
    )
  }
}
