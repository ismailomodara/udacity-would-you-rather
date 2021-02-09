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

    const optionOneVotes = question.optionOne.votes.length
    const optionTwoVotes = question.optionTwo.votes.length
    const totalVotes =  optionOneVotes + optionTwoVotes

    return (
        <div className="question answered">
          <div className="question__title">
            <p>Asked by {authorName}</p>
          </div>
          <div>
            <img className="question__image" src={authorImage} alt="" />
            <div className="question__details">
              <div className="question__details-text">
                <h4>Results</h4>
              </div>
              <div className="question__details-options">
                <p>Would you rather</p>
                <div
                    className={`${authedUserAnswer === 'optionOne' ? 'selected' : ''}`}>
                  <span style={{width: `${(optionOneVotes / totalVotes) * 100}%`}}></span>
                  <p>{optionOne}?</p>
                  <p>{`${(optionOneVotes / totalVotes) * 100}%`}</p>
                  <p>{optionOneVotes} / {totalVotes} votes</p>
                  </div>
                <div
                    className={`${authedUserAnswer === 'optionTwo' ? 'selected' : ''}`}>
                  <span style={{width: `${(optionTwoVotes / totalVotes) * 100}%`}}></span>
                  <p>{optionTwo}?</p>
                  <p>{`${(optionTwoVotes / totalVotes) * 100}%`}</p>
                  <p>{optionTwoVotes} / {totalVotes} votes</p>
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
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(QuestionAnswered)
