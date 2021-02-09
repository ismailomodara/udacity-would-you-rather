import React, { Component }  from 'react'
import { connect } from 'react-redux'
import '../assets/css/poll.scss'

class Poll extends Component {

  render() {
    const { type, question, users, view } = this.props

    const authorImage = users[question.author].avatarURL
    const authorName = users[question.author].name
    const optionOne = question.optionOne.text

    return (
        <div className="poll">
          <div className="poll__title">
            { type === 'unanswered' ? <p>{authorName} asks</p> : <p>Asked by {authorName}</p>}
          </div>
          <div>
            <img className="poll__image" src={authorImage} alt="" />
            <div className="poll__details">
              <div className="poll__details-text">
                <div>
                  <p>Would you rather</p>
                  <p>...{optionOne} <span>or</span></p>
                </div>
                <div className="actions">
                  <span onClick={() => view(question.id)}>View</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Poll)
