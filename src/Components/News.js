import React, { Component } from 'react'
import Data from '../Config/DataConfig'
import { Link } from 'react-router-dom'
import Facets from './Facets'

export default class News extends Component {
  constructor (props) {
    super(props)

    this.state = {
      technopologyNews: [],
      loadedContent: 10,
      hasMoreItems: true,
      partNews: [],
      selectedCategory: 'Technology',
      outOfService: false
    }
    
    this.handleFacetChange = this.handleFacetChange.bind(this)
  }

  componentDidMount () {
    const selectedFacet = this.state.selectedCategory.toLowerCase()
    Data
      .get(`category?section=alltickers&sector=${selectedFacet}&items=50`)
      .then(res => this.setState({ technopologyNews: res.data }))
      .then(data => {
        if (data === undefined) {
          this.setState({ outOfService: true })
          return []
        }
        let partNews = this.state.technopologyNews.slice(0, this.state.loadedContent)
        this.setState({ partNews })
      })
  }

  handleMoreItems (event) {
    event.preventDefault()
    let prevLoadedContent = this.state.loadedContent

    if (prevLoadedContent === 50) {
      this.setState({ hasMoreItems: false })
      return
    }

    this.setState({
      loadedContent: prevLoadedContent + 10
    })

    let partNews = this.state.technopologyNews.slice(0, this.state.loadedContent)
    this.setState({ partNews })
  }

  
  handleFacetChange (event) {
    let selectedCategory = event.target.innerText
    this.setState({ selectedCategory })

    if (selectedCategory !== '') {
      this.setState({ technopologyNews: ''})

      Data
      .get(`category?section=alltickers&sector=${selectedCategory.replace(" ", "%20")}&items=50`)
      .then(res => this.setState({ technopologyNews: res.data }))
      .then(data => {
        if (data === undefined) {
          this.setState({ outOfService: true })
          return []
        }
        let partNews = this.state.technopologyNews.slice(0, this.state.loadedContent)
        this.setState({ partNews })
      })
    }
  }

  render () {
    let news = ''
    let loadMoreBtn = ''
    let loadingMsg = (
      <h4 className='mr-auto ml-auto mt-3'>News are loading... </h4>
    )

      if (this.state.partNews.length > 0) {
        news = this.state.partNews.map((news, index) => (
          <div className='card col-md-12 mb-2' key={index}>
            <div className='row no-gutters'>
              <div className='col-md-3 text-center'>
                <img src={news.image_url} className='card-img' alt={news.title} />
              </div>
              <div className='col-md-9 body'>
                <div className='card-body text-left'>
                  <h5 className='card-title'>{news.title}</h5>
                  <span className='badge badge-info'>{news.source_name}</span>
                  <br />
                  <p className='card-text'>{news.text}</p>
                  <p className='card-text'><small className='text-muted'>{new Date(news.date).toLocaleDateString()} {new Date(news.date).toLocaleTimeString()}</small></p>
                  <Link className='btn btn-light' to={news.news_url} target='_blank'>Read more</Link>
                </div>
              </div>
            </div>
          </div>
        ))
  
        if (this.state.hasMoreItems) {
          loadMoreBtn = (
            <button className='btn btn-light' onClick={this.handleMoreItems.bind(this)}>Load more items</button>
          )
        }
  
        loadingMsg = ''
      }

      if (this.state.outOfService) {
        loadingMsg = (
          <h3 className='mr-auto ml-auto mt-3'>Sorry, the service is not working right now. Try again later.</h3>
        )
      }

    return (
      <div className='column m-auto text-center' id='news'>
        <div className='news container-fluid row'>
        <Facets selectCategory={this.handleFacetChange} selectedCategory={this.state.selectedCategory} />
          {loadingMsg}
          {news}
          {loadMoreBtn}
        </div>
      </div>
    )
  }
}
