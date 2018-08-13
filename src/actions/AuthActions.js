import {auth} from "../firebase"

export const signInAnnonim = () => dispatch => {
  return dispatch({
    type: "SIGNIN_ANNONIM",
    payload: auth.signInAnonymously()
  })
}

export const getUser = () => dispatch => {
  dispatch({
    type: 'GET_USER_PENDING'
  })

  auth.onAuthStateChanged(user => {
    if (user) {
      return dispatch({
        type: "GET_USER_FULFILLED",
        payload: {...user}
      })
    }
    return dispatch({
      type: 'GET_USER_REJECTED',
    })
  })
}
