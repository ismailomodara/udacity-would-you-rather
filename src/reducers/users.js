import { SET_USERS, SET_USER_QUESTION, SET_USER_ANSWER } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case SET_USERS :
      return {
        ...state,
        ...action.users
      }
    case SET_USER_QUESTION:
      const { author, id } = action.user
      let user = {
        ...state[author],
        questions: state[author].questions.concat(id)
      }
      return {
        ...state,
        [author]: user
      }
    case SET_USER_ANSWER :
      const { authedUser, qid, answer } = action.user

      let userAnswer = {
        ...state[authedUser],
        answers: {
          ...state[authedUser].answers,
          [qid]: answer
        }
      }
      return {
        ...state,
        [authedUser]: userAnswer
      }
    default :
      return state
  }
}
