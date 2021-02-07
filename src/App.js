import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import Nav from "./components/Nav";
import Login from './pages/Login'
import Home from './pages/Home';
import AddQuestion from "./pages/AddQuestion";
import Question from "./pages/Question";
import Leaderboard from "./pages/Leaderboard";

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
                  <Nav />
                  <Route path='/home' exact component={Home} />
                  <Route path='/add' component={AddQuestion} />
                  <Route path='/question/:id' component={Question} />
                  <Route path='/leaderboard' component={Leaderboard} />
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
