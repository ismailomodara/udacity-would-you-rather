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
    const { authedUser, unanswered, answered } = this.props

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
                  <QuestionUnanswered key={index} question={question} view={this.viewQuestion}/>) :
              answered.map((question, index) =>
                  <QuestionAnswered key={index} question={question} />)
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
      answered.push(questions[question])
    } else {
      unanswered.push(questions[question])
    }
  })

  return {
    authedUser,
    unanswered: unanswered.sort((a,b) => a.timestamp > b.timestamp ? -1 : 1),
    answered: answered.sort((a,b) => a.timestamp > b.timestamp ? -1 : 1),
  }
}

export default connect(mapStateToProps)(Home)
