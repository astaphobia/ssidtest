const initialState = {
  user: false,
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN_ANNONIM_FULFILLED":
      return {
        ...state,
        user: action.payload.user
      }
    case "GET_USER_PENDING":
      return {
        ...state,
        loading: true
      }
    case "GET_USER_FULFILLED":
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case "GET_USER_REJECTED":
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
