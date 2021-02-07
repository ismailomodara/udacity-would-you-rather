import { SET_QUESTIONS, SET_QUESTION_ANSWER } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case SET_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case SET_QUESTION_ANSWER :
      const { authedUser, qid, answer } = action.payload

      let question = {
        ...state[qid],
        [answer]: {
          ...state[qid][answer],
          votes: state[qid][answer].votes.concat([authedUser])
        }
      }
      return {
        ...state,
        [qid]: question
      }
    default :
      return state
  }
}
