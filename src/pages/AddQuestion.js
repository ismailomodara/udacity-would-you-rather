import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from "../actions/questions";
import '../assets/css/question.scss'

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }
  handleChange = (e, option) => {
    const text = e.target.value

    this.setState(() => ({
      [option]: text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch, authedUser } = this.props

    dispatch(handleAddQuestion({ optionOneText, optionTwoText, author: authedUser }))

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true
    }))
  }
  render() {
    const { optionOneText, optionTwoText, toHome } = this.state


    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
        <div className="add-question">
          <div className="container">
            <div className="add-question__form">
              <div className="add-question__form-title">
                <h5 className='center'>Would you rather?</h5>
              </div>
              <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="Option One"
                    value={optionOneText}
                    onChange={(e) => this.handleChange(e, 'optionOneText')}
                />
                <input
                    placeholder="Option Two"
                    value={optionTwoText}
                    onChange={(e) => this.handleChange(e, 'optionTwoText')}
                />
                <button
                    className={optionOneText === '' || optionTwoText === '' ? 'disabled' : ''}
                    type='submit'
                    disabled={optionOneText === '' || optionTwoText === ''}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(AddQuestion)
