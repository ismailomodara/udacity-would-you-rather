import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import Login from './pages/Login'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
        <Router>
          <div className='container'>
            {this.props.authedUser === null
                ? <Login />
                : <div>
                  <h1>Logged In</h1>
                </div>}
          </div>
        </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
