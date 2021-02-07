import React, { Component }  from 'react'
import { connect } from 'react-redux'
import '../assets/css/question.scss'

class QuestionAnswered extends Component {
  render() {

    const { question, authedUser, users } = this.props
    const authedUserAnswer = users[authedUser].answers[question.id]

    const authorImage = users[question.author].avatarURL
    const authorName = users[question.author].name
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text

    return (
        <div className="question">
          <p className="question__title">Asked by {authorName}</p>
          <div>
            <img className="question__image" src={authorImage} alt="" />
            <div className="question__details">
              <div className="question__details-text">
                <p>Would you rather</p>
                <p>{optionOne} - {authedUserAnswer === 'optionOne' ? <span>Your answer</span> : '' }</p>
                <p>{optionTwo} - {authedUserAnswer === 'optionTwo' ? <span>Your answer</span> : '' }</p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(QuestionAnswered)
