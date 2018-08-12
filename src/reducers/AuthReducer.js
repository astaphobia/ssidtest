
const initialState = {
  user: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN_ANNONIM_FULFILLED":
      return {
        ...state,
        user: action.payload.user
      }
    case 'GET_USER':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}
