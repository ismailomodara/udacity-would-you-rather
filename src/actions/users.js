export const SET_USERS = 'SET_USERS'
export const SET_USER_ANSWER = 'SET_USER_ANSWER'

export function setUsers (users) {
  return {
    type: SET_USERS,
    users,
  }
}

export function setUserAnswer (payload) {
  return {
    type: SET_USER_ANSWER,
    payload,
  }
}

export function handleUserAnswer ({ authedUser, qid, answer}) {
  return (dispatch) => {
    dispatch(setUserAnswer({ authedUser, qid, answer }))
  }
}
