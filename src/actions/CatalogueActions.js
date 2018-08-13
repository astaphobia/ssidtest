import {firestoreRef} from "../firebase"

export const getList = uid => async dispatch => {
  return dispatch({
    type: "GET_CATALOGUES",
    payload: firestoreRef.collection("/catalogues").get()
  })
}
