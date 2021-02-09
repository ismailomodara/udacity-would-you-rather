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
          {questionAnsweredByUser ?
            <QuestionAnswered question={question} /> :
            <QuestionUnanswered question={question}  />
          }
        </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions }) {
  const id = window.location.pathname.split('/')[2]
  const question = questions[id]

  return {
    question,
    authedUser
  }
}

export default connect(mapStateToProps)(Home)
