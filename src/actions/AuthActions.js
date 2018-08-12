import {auth} from "../firebase"

export const signInAnnonim = () => {
  return {
    type: "SIGNIN_ANNONIM",
    payload: auth.signInAnonymously()
  }
}

export const getUser = () => (dispatch) => {
  auth.onAuthStateChanged( user => {
    if (user) {
      return dispatch({
        type: "GET_USER",
        payload:{...user}
      })
    }
  })
}
