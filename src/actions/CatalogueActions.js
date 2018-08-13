import {firestoreRef} from "../firebase"

export const getList = uid => async dispatch => {
  return dispatch({
    type: "GET_CATALOGUES",
    payload: firestoreRef.collection("/catalogues").get()
  })
}
export const favorite = item => {
  return {
    type: "ADD_TO_FAVORITE",
    payload: item
  }
}

export const unFavorite = item => {
  return {
    type: "REMOVE_FROM_FAVORITE",
    payload: item
  }
}
