import React, { Component }  from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {

  render() {

    const { sortedUsers } = this.props

    return (
        <div>
          <h1>Leaderboard</h1>
          <div className="leaderboard">
            {
              sortedUsers.map(user => <p>{user.name} {user.total} {Object.keys(user.answers).length} {user.questions.length}</p>)
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
