import React, { Component } from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import './assets/css/main.scss'
import Nav from "./components/Nav";
import Login from './pages/Login'
import Home from './pages/Home';
import AddQuestion from "./pages/AddQuestion";
import Question from "./pages/Question";
import Leaderboard from "./pages/Leaderboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
    if(!this.props.authedUser && window.location.pathname !== '/') {
      window.location.href = "http://localhost:3000"
    }
  }
  render() {
    return (
        <Router>
          {!this.props.authedUser
              ? <Route path='/' exact component={Login} />
              : <div className="page">
                  <Nav user={this.props.user} />
                  <div className="page__content container">
                    <Route path='/home' exact component={Home} />
                    <Route path='/add' component={AddQuestion} />
                    <Route path='/question/:id' component={Question} />
                    <Route path='/leaderboard' component={Leaderboard} />
                  </div>
                </div>
          }
        </Router>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    user: users[authedUser]
  }
}

export default connect(mapStateToProps)(App)
