import React, { Component }  from 'react'
import '../assets/css/leaderboard.scss'

class Poll extends Component {

  render() {
    const { user } = this.props

    const userImage = user.avatarURL
    const userName = user.name
    const userAnswered = Object.keys(user.answers).length
    const userQuestions = user.questions.length
    const userTotal = userAnswered + userQuestions

    return (
        <div className="user">
          <img className="user__image" src={userImage} alt="" />
          <div className="user__details">
            <div className="user__details-text">
              <h5>{userName}</h5>
              <div>
                <p>Questions: {userQuestions}</p>
                <p>Answered: {userAnswered}</p>
              </div>
            </div>
            <div className="user__details-total">
              <span>{userTotal}</span>
            </div>
          </div>
        </div>
    )
  }
}

export default Poll
