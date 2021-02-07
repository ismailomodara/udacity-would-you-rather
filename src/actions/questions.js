import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export const SET_QUESTIONS = 'SET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SET_QUESTION_ANSWER = 'SET_QUESTION_ANSWER'

export function setQuestions (questions) {
  return {
    type: SET_QUESTIONS,
    questions,
  }
}

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion ({ optionOneText, optionTwoText, author }) {
  return (dispatch) => {
    dispatch(showLoading())

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
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
