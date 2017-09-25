import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import Services from '../components/Services'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
