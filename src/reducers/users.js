import { SET_USERS, SET_USER_ANSWER } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case SET_USERS :
      return {
        ...state,
        ...action.users
      }
    case SET_USER_ANSWER :
      const { authedUser, qid, answer } = action.payload

      let user = {
        ...state[authedUser],
        answers: {
          ...state[authedUser].answers,
          [qid]: answer
        }
      }
      return {
        ...state,
        [authedUser]: user
      }
    default :
      return state
  }
}
