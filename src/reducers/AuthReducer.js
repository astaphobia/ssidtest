import {auth} from "../firebase"

const initialState = {
  user: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN_FULFILLED":
      console.log(action.payload)
      return state
    default:
      return state
  }
}
