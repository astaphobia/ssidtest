import {createStore, applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import logger from "redux-logger"
import promiseMiddleware from 'redux-promise-middleware'

import reducers from "./reducers"

let middlewares = [reduxThunk, promiseMiddleware()]
if (process.env.NODE_ENV === "development") {
  middlewares = [...middlewares, logger]
}
export default createStore(reducers, {}, applyMiddleware(...middlewares))
