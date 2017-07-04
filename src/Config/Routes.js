import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../Components/HomePage'
import Contact from '../Components/Contact'
import About from '../Components/About'
import Portfolio from '../Components/Portfolio'
import NotFoundPage from '../Components/NotFoundPage'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/home' component={HomePage} />
    <Route path='/about' component={About} />
    <Route path='/portfolio' component={Portfolio} />
    <Route path='/contact' component={Contact} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes
