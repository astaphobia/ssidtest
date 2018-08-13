import {firestoreRef} from "../firebase"

export const getList = () => async dispatch => {
  return dispatch({
    type: "GET_CATALOGUES",
    payload: firestoreRef.collection("/catalogues").get()
  })
}
export const getItem = (doc_id) => async dispatch => {
  return dispatch({
    type: 'GET_CATALOGUE',
    payload: firestoreRef.collection('/catalogues').doc(doc_id).get()
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
