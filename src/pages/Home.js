import React, { Component }  from 'react'
import QuestionUnanswered from "../components/QuestionUnanswered";
import QuestionAnswered from "../components/QuestionAnswered";
import { connect } from 'react-redux'
import '../assets/css/home.scss'

class Home extends Component {
  state = {
    view: 'unanswered'
  }

  updateView = (view) => {
    this.setState(() => ({ view: view }))
  }

  viewQuestion = (id) => {
    this.props.history.push(`/question/${id}`)
  }

  render() {

    const { view } = this.state
    const { authedUser, questions, unanswered, answered } = this.props

    return (
        <div>
          <h1>Home ({authedUser})</h1>
          <div className="toggle">
            <div
                className={`toggle__item ${view === 'unanswered' ? 'selected' : ''}`}
                onClick={() => this.updateView('unanswered')}>
              <span>Unanswered</span>
            </div>
            <div
                className={`toggle__item ${view === 'answered' ? 'selected' : ''}`}
                onClick={() => this.updateView('answered')}>
              <span>Answered</span>
            </div>
          </div>
          {view === 'unanswered' ?
              unanswered.map((question, index) =>
                  <QuestionUnanswered key={index} question={questions[question]} view={this.viewQuestion}/>) :
              answered.map((question, index) =>
                  <QuestionAnswered key={index} question={questions[question]} />)
          }
        </div>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  let unanswered = []
  let answered = []

  Object.keys(questions).forEach(question => {
    if(users[authedUser].answers[question]) {
      answered.push(question)
    } else {
      unanswered.push(question)
    }
  })

  return {
    authedUser,
    unanswered,
    answered,
    questions
  }
}

export default connect(mapStateToProps)(Home)
