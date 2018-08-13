const initialState = {
  catalogues: [],
  favorites: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATALOGUES_FULFILLED":
      let {catalogues} = state
      action.payload.forEach(doc => {
        catalogues = [...catalogues, doc.data()]
      })
      return {
        ...state,
        catalogues
      }
    case 'ADD_TO_FAVORITE':
      return state
    default:
      return state
  }
}
