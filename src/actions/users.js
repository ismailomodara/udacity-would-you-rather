export const SET_USERS = 'SET_USERS'
export const SET_USER = 'SET_USER'
export const SET_USER_ANSWER = 'SET_USER_ANSWER'

export function setUsers (users) {
  return {
    type: SET_USERS,
    users,
  }
}

export function setUser (user) {
  return {
    type: SET_USER,
    user,
  }
}

export function handleUser (user) {
  return (dispatch) => {
    dispatch(setUser(user))
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
