import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from "../actions/authedUser";
import '../assets/css/login.scss'

class Login extends Component {
  state = {
    authedUser: ''
  }

  setSelectedUser = (id) => {
    this.setState({ authedUser: id})
  }

  login = () => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(this.state.authedUser))
  }

  render() {
    return (
        <div>
          <h1>Login now</h1>
          <ul>
            {Object.keys(this.props.users).map((id) => (
                <li key={id} onClick={() => this.setSelectedUser(id)} className={this.state.authedUser === id ? 'selected' : ''}>
                  <div>
                    <img src={this.props.users[id].avatarURL} alt={id} />
                    <span>{this.props.users[id].name}</span>
                  </div>
                </li>
            ))}
          </ul>
          <button onClick={() => this.login()}>Login</button>
        </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)
