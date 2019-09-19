import React, { Component } from 'react'

import FacetButton from './FacetButton'

export default class Facets extends Component {
  render () {
    let categoriesArr = [
{ code: 'basic%20materials', name: 'Basic Materials' },
{ code: 'conglomerates', name:  'Conglomerates' },
{ code: 'consumer%20goods', name:  'Consumer Goods' },
{ code: 'financial', name:  'Financial' },
{ code: 'healthcare', name: 'Healthcare' },
{ code: 'industrial%20goods', name: 'Industrial Goods' },
{ code: 'services', name: 'Services' },
{ code: 'technology', name: 'Technology' },
{ code: 'utilities', name: 'Utilities' } ]
    
    let selectedCategory = this.props.selectedCategory    
    let categories = categoriesArr.map((category, index) => (
      <FacetButton key={index} name={category.name} changeCategory={this.props.selectCategory} selected={category.name === selectedCategory ? true : false} />
    ))
    return (
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          {categories}
        </div>
      </div>
    )
  }
}
