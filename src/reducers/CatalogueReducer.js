const initialState = {
  catalogues: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATALOGUES_FULFILLED":
    let {catalogues} = state;
    action.payload.forEach((doc) => {
      catalogues = [
        ...catalogues,
        doc.data()
      ]
    });
      return {
        ...state,
        catalogues
      }
    default:
      return state
  }
}
