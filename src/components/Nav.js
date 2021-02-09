import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/nav.scss'
import {setAuthedUser} from "../actions/authedUser";
import {connect} from "react-redux";

class Nav extends Component {

  logout = () => {
    this.props.dispatch(setAuthedUser(''))
    window.location.href = "http://localhost:3000"
  }

  render() {
    const props = this.props

    return (
        <nav className='nav'>
          <div className="container">
            <ul>
              <li>
                <NavLink to='/home' exact activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/add' activeClassName='active'>
                  New Question
                </NavLink>
              </li>
              <li>
                <NavLink to='/leaderboard' activeClassName='active'>
                  Leaderboard
                </NavLink>
              </li>
            </ul>
            <div className="user">
              <img src={props.user.avatarURL} alt="" />
              <p>{props.user.name}</p>
              <span onClick={() => this.logout()}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                <line x1="12" y1="2" x2="12" y2="12"></line>
              </svg>
              Logout
            </span>
            </div>
          </div>
        </nav>
    )
  }
}

export default connect()(Nav)
