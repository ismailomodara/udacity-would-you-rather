import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer} from "../actions/questions";
import { handleUserAnswer } from "../actions/users";
import '../assets/css/question.scss'

class QuestionUnanswered extends Component {

  state = {
    openQuestion: false,
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

  }

  render() {

    const { openQuestion, answer } = this.state
    const { question, users, view } = this.props

    const authorImage = users[question.author].avatarURL
    const authorName = users[question.author].name
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text

    return (
        <div className="question">
          <p className="question__title">{authorName}</p>
          <div>
            <img className="question__image" src={authorImage} alt="" />
            <div className="question__details">
              <div className="question__details-text">
                <p>Would you rather</p>
                <div>
                  <span onClick={() => this.togglePoll()}>{openQuestion ? 'Hide' : 'See'}</span>
                  <span onClick={() => view(question.id)}>View</span>
                </div>
              </div>
              <p>{optionOne}</p>
              {
                openQuestion ?
                    <div className="question__details-options">
                      All Options
                      <div
                          className={`${answer === 'optionOne' ? 'selected' : ''}`}
                          onClick={() => this.setQuestionAnswer('optionOne')}>{optionOne}</div>
                      <div
                          className={`${answer === 'optionTwo' ? 'selected' : ''}`}
                          onClick={() => this.setQuestionAnswer('optionTwo')}>{optionTwo}</div>
                      <button onClick={(event) => this.saveAnswer(event)}>Submit</button>
                    </div> : ''
              }
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
