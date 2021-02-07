import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestionAnswer } from "../utils/api";

export const SET_QUESTIONS = 'SET_QUESTIONS'
export const SET_QUESTION_ANSWER = 'SET_QUESTION_ANSWER'

export function setQuestions (questions) {
  return {
    type: SET_QUESTIONS,
    questions,
  }
}

export function setQuestionAnswer (payload) {
  return {
    type: SET_QUESTION_ANSWER,
    payload,
  }
}

export function handleQuestionAnswer ({ authedUser, qid, answer}) {
  return (dispatch) => {
    dispatch(showLoading())

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
        .then(() => {
          dispatch(setQuestionAnswer({ authedUser, qid, answer }))
        })
        .then(() => dispatch(hideLoading()))
  }
}
