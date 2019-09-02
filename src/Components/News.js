import React, { Component } from 'react'
import Data from '../Config/DataConfig'
import { Link } from 'react-router-dom'

export default class News extends Component {
  constructor (props) {
    super(props)

    this.state = {
      technopologyNews: [],
      loadedContent: 10,
      hasMoreItems: true,
      partNews: []
    }
  }

  componentDidMount () {
    const selectedFacet = this.props.selectedFacet.replace(' ', '%20').toLowerCase() || 'technology'
    Data
      .get(`category?section=alltickers&sector=${selectedFacet}&items=50`)
      .then(res => this.setState({ technopologyNews: res.data }))
      .then(data => {
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

  render () {
    let news = ''
    let loadMoreBtn = ''
    let loadingMsg = (
      <h3>News are loading... </h3>
    )

    if (this.state.technopologyNews.length > 0) {
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

    return (
      <div className='column m-auto text-center' id='news'>
        <h2 className='mb-4'>Technology news</h2>
        <div className='news container-fluid row'>
          {loadingMsg}
          {news}
          {loadMoreBtn}
        </div>
      </div>
    )
  }
}
