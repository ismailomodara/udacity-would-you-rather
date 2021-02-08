import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from "../actions/authedUser";
import '../assets/css/login.scss'

class Login extends Component {
  state = {
    authedUser: '',
    loggedIn: false
  }

  setSelectedUser = (id) => {
    this.setState({ authedUser: id})
  }

  login = () => {
    const { authedUser, loggedIn } = this.state

    const { dispatch } = this.props
    dispatch(setAuthedUser(authedUser))

    this.setState(() => ({
      authedUser: authedUser,
      loggedIn: !loggedIn
    }))

    localStorage.setItem('user', authedUser)
    this.props.history.push('/home')
  }

  render() {
    const { authedUser } = this.state

    return (
        <div className="login">
          <div className="login__card">
            <div className="login__card-title">
              <h6>Welcome to the </h6>
              <h5>Would You Rather App</h5>
              <p>Please select a user to continue</p>
            </div>
            <div className="login__card-content">
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
              <button
                  type='submit'
                  className={authedUser === '' ? 'disabled' : ''}
                  disabled={authedUser === ''}
                  onClick={() => this.login()}>
                Login
              </button>
            </div>
          </div>
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
