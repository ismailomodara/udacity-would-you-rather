import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Route,
  Redirect,
} from "react-router-dom";

class PrivateRoute extends Component {
  render() {

    const { authedUser, children, rest } = this.props

    return (
        <Route
            {...rest}
            render={({ location }) =>
                authedUser ? (
                    children
                ) : (
                    <Redirect
                        to={{
                          pathname: "/",
                          state: { from: location }
                        }}
                    />
                )
            }
        />
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(PrivateRoute)
