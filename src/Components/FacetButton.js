import React, { Component } from 'react'

export default class FacetButton extends Component {
  render () {
    let isSelected = this.props.isSelected
    let btnClass = 'btn btn-outline-light'
    if (isSelected) {
      btnClass = 'btn btn-light'
    }
    return (
        <span
          className={btnClass}
          id={this.props.name}
          onClick={this.props.changeCategory}>
        {this.props.name}</span>
    )
  }
}
