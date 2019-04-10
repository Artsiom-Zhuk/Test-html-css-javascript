import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Nav from '../Nav'
import Main from '../Main'
import Tests from '../Tests'
import './index.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app__div-wrapper'>
          <Nav />
          <Route exact path='/' component={Main} />
          <Route path='/tests' component={Tests} />
        </div>
      </Router>
    )
  }
}
export default App
