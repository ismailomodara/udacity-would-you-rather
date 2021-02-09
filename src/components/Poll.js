import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import '../assets/css/poll.scss'

const Poll = props => {
  const router = useHistory();

  const { type, question, users } =  props

  const authorImage = users[question.author].avatarURL
  const authorName = users[question.author].name
  const optionOne = question.optionOne.text

  return (
      <div className="poll">
        <div className="poll__title">
          { type === 'unanswered' ? <p>{authorName} asks</p> : <p>Asked by {authorName}</p>}
        </div>
        <div>
          <img className="poll__image" src={authorImage} alt="" />
          <div className="poll__details">
            <div className="poll__details-text">
              <div>
                <p>Would you rather</p>
                <p>...{optionOne} <span>or</span></p>
              </div>
              <div className="actions">
                <span onClick={() => router.push(`/question/${question.id}`)}>View</span>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Poll)
