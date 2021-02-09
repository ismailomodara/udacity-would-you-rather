import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer} from "../actions/questions";
import { handleUserAnswer } from "../actions/users";
import '../assets/css/question.scss'

class QuestionUnanswered extends Component {

  state = {
    answer: ""
  }

  togglePoll = () => {
    this.setState({ openQuestion: !this.state.openQuestion})
  }

  setQuestionAnswer = (answer) => {
    this.setState({ answer })
  }

  saveAnswer = (e) => {
    e.preventDefault()

    const { answer } = this.state
    const { dispatch, authedUser, question } = this.props

    const payload = { authedUser, qid: question.id, answer}

    dispatch(handleQuestionAnswer(payload))
    dispatch(handleUserAnswer(payload))

    this.setState({ openQuestion: false })
  }

  render() {

    const { answer } = this.state
    const { question, users } = this.props

    const authorImage = users[question.author].avatarURL
    const authorName = users[question.author].name
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text

    return (
        <div className="question">
          <div className="question__title">
            <p>{authorName} asks</p>
          </div>
          <div>
            <img className="question__image" src={authorImage} alt="" />
            <div className="question__details">
              <div className="question__details-text">
                <div>
                  <p>Would you rather</p>
                </div>
              </div>
              <div className="question__details-options">
                <div
                    className={`${answer === 'optionOne' ? 'selected' : ''}`}
                    onClick={() => this.setQuestionAnswer('optionOne')}>{optionOne}</div>
                <div
                    className={`${answer === 'optionTwo' ? 'selected' : ''}`}
                    onClick={() => this.setQuestionAnswer('optionTwo')}>{optionTwo}</div>
                <button
                    onClick={(event) => this.saveAnswer(event)}
                    disabled={answer === ''}>Submit</button>
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

export default connect(mapStateToProps)(QuestionUnanswered)
