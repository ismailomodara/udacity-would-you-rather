import React, {Component, Fragment} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import './assets/css/main.scss'
import Nav from "./components/Nav";
import Login from './pages/Login'
import Home from './pages/Home';
import AddQuestion from "./pages/AddQuestion";
import Question from "./pages/Question";
import Leaderboard from "./pages/Leaderboard";
import PrivateRoute from "./components/PrivateRoute"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
        <Router>
          <Fragment>
            { this.props.authedUser && <Nav user={this.props.user} /> }
            <Switch>
              <Route path='/' exact component={Login} />
              <PrivateRoute path="/home">
                <Home />
              </PrivateRoute>
              <PrivateRoute path="/add">
                <AddQuestion />
              </PrivateRoute>
              <PrivateRoute path="/question/:id">
                <Question />
              </PrivateRoute>
              <PrivateRoute path="/leaderboard">
                <Leaderboard />
              </PrivateRoute>
            </Switch>
          </Fragment>
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
