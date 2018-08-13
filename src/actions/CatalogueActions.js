import {firestoreRef} from "../firebase"

export const getList = uid => async dispatch => {
  return dispatch({
    type: "GET_CATALOGUES",
    payload: firestoreRef.collection("/catalogues").get()
  })
}
export const favorite = (item) => {
  console.log(item)
  return {
    type: 'ADD_TO_FAVORITE',
    payload: item
  }
}
