import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from "../actions/authedUser";
import '../assets/css/login.scss'

class Login extends Component {
  state = {
    authedUser: 'sarahedo'
  }
  setSelectedUser = (id) => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(id))
  }
  render() {
    return (
        <div>
          <h1>Login now</h1>
          <ul>
            {Object.keys(this.props.users).map((id) => (
                <li key={id}>
                  <img src={this.props.users[id].avatarURL} alt={id} />
                  <span>{this.props.users[id].name}</span>
                </li>
            ))}
          </ul>
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
