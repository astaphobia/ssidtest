const initialState = {
  catalogues: [],
  favorites: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATALOGUES_FULFILLED":
      let {catalogues} = state
      action.payload.forEach(doc => {
        catalogues = [...catalogues, {product_id: doc.id, ...doc.data()}]
      })
      return {
        ...state,
        catalogues
      }
    case "ADD_TO_FAVORITE": {
      let {favorites} = state
      favorites = [...favorites, action.payload]
      return {
        ...state,
        favorites
      }
      console.log(favorites)
    }
    case "REMOVE_FROM_FAVORITE": {
      let {favorites} = state
      favorites = favorites.filter(favorite => favorite.id !== action.payload.id)
      return {
        ...state,
        favorites
      }
    }
    default:
      return state
  }
}
