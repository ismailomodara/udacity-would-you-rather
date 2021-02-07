import React, { Component }  from 'react'
import QuestionUnanswered from "../components/QuestionUnanswered";
import QuestionAnswered from "../components/QuestionAnswered";
import { connect } from 'react-redux'
import '../assets/css/home.scss'

class Home extends Component {
  render() {

    const { question, authedUser } = this.props
    const questionAnsweredByUser = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)

    return (
        <div>
          <h1>Question </h1>
          {questionAnsweredByUser ?
            <QuestionAnswered question={question} /> :
            <QuestionUnanswered question={question}  />
          }
        </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions }, props) {
  const { id } = props.match.params
  const question = questions[id]

  return {
    question,
    authedUser
  }
}

export default connect(mapStateToProps)(Home)
