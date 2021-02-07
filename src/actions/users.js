export const SET_USERS = 'SET_USERS'
export const SET_USER_QUESTION = 'SET_USER_QUESTION'
export const SET_USER_ANSWER = 'SET_USER_ANSWER'

export function setUsers (users) {
  return {
    type: SET_USERS,
    users,
  }
}

export function setUserQuestion (user) {
  return {
    type: SET_USER_QUESTION,
    user,
  }
}

export function handleUserQuestion ({ author, id }) {
  return (dispatch) => {
    dispatch(setUserQuestion({ author, id }))
  }
}

export function setUserAnswer (user) {
  return {
    type: SET_USER_ANSWER,
    user,
  }
}


export function handleUserAnswer ({ authedUser, qid, answer}) {
  return (dispatch) => {
    dispatch(setUserAnswer({ authedUser, qid, answer }))
  }
}
