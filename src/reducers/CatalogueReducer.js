const initialState = {
  catalogues: [],
  favorites: [],
  catalogue: null,
  loading: false
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
    case "GET_CATALOGUE_PENDING":
      return {
        ...state,
        loading: true
      }
    case "GET_CATALOGUE_FULFILLED": {
      if (action.payload.exists) {
        return {
          ...state,
          catalogue: action.payload.data(),
          loading: false
        }
      }
      return {...state, loading: false}
    }
    case "GET_CATALOGUE_REJECTED":
      return {...state, loading: false}
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
      favorites = favorites.filter(
        favorite => favorite.id !== action.payload.id
      )
      return {
        ...state,
        favorites
      }
    }
    default:
      return state
  }
}
