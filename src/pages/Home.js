import React, { Component }  from 'react'
import Poll from "../components/Poll";
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
    const { unanswered, answered } = this.props

    return (
        <div className="home">
          <div className="home__toggle">
            <div
                className={`home__toggle-item ${view === 'unanswered' ? 'selected' : ''}`}
                onClick={() => this.updateView('unanswered')}>
              <span>Unanswered</span>
            </div>
            <div
                className={`home__toggle-item ${view === 'answered' ? 'selected' : ''}`}
                onClick={() => this.updateView('answered')}>
              <span>Answered</span>
            </div>
          </div>
          {view === 'unanswered' ?
              unanswered.map((question, index) =>
                  <Poll key={index} question={question} view={this.viewQuestion} type='unanswered' />) :
              answered.map((question, index) =>
                  <Poll key={index} question={question} type='answered' view={this.viewQuestion} />)
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
    unanswered: unanswered.sort((a,b) => a.timestamp > b.timestamp ? -1 : 1),
    answered: answered.sort((a,b) => a.timestamp > b.timestamp ? -1 : 1),
  }
}

export default connect(mapStateToProps)(Home)
