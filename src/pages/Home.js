import React, { Component }  from 'react'
import { connect } from 'react-redux'
import '../assets/css/home.scss'

class Home extends Component {
  state = {
    view: 'unanswered'
  }

  updateView = (view) => {
    this.setState(() => ({ view: view }))
  }

  render() {

    const { view } = this.state
    const { unanswered, answered } = this.props

    return (
        <div>
          <h1>Home</h1>
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

             <div> {unanswered.map((question, index) => <p key={index}>{question}</p>)}</div> :
              <div> {answered.map((question, index) => <p key={index}>{question}</p>)}</div> }
        </div>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  let unanswered = []
  let answered = []

  Object.keys(questions).forEach(question => {
    if(users['sarahedo'].answers[question]) {
      answered.push(question)
    } else {
      unanswered.push(question)
    }
  })

  return {
    unanswered,
    answered,
    questions
  }
}

export default connect(mapStateToProps)(Home)
