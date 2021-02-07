import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from "../actions/questions";

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
      return <Redirect to='/home' />
    }

    return (
        <div>
          <h3 className='center'>Would you rather?</h3>
          <form className='new-tweet' onSubmit={this.handleSubmit}>
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
                className='btn'
                type='submit'
                disabled={optionOneText === '' || optionTwoText === ''}>
              Submit
            </button>
          </form>
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
