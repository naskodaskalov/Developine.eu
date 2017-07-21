import React, { Component } from 'react'
import Header from './Components/Common/Header'
import Footer from './Components/Common/Footer'
import Routes from './Config/Routes'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <div className='container-fluid'>
          <Routes />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
