import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import Login from './pages/Login'
import Home from './pages/Home';
import Question from "./pages/Question";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
        <Router>
          <div className='container'>
            {!this.props.authedUser
                ? <Route path='/' exact component={Login} />
                : <div>
                  <Route path='/home' exact component={Home} />
                  <Route path='/question/:id' component={Question} />
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
