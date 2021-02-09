import React, { Component }  from 'react'
import { connect } from 'react-redux'
import User from "../components/User";

class Leaderboard extends Component {

  render() {

    const { sortedUsers } = this.props

    return (
        <div>
          <div className="leaderboard">
            {
              sortedUsers.map((user, index) => <User key={index} user={user} />)
            }
          </div>
        </div>
    )
  }
}

function mapStateToProps ({ users }) {

  const sortedUsers = Object.keys(users).map(user => {
    return {
      ...users[user],
      total: Object.keys(users[user].answers).length + users[user].questions.length
    }
  }).sort((a, b) => a.total > b.total ? -1 : 1)


  return {
    sortedUsers
  }
}

export default connect(mapStateToProps)(Leaderboard)
