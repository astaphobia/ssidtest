import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'

import reducers from './reducers'

let middlwares = [reduxThunk]
if (process.env.NODE_ENV === 'production') {
  middlwares = [
    ...middlwares,
    logger
  ]
}
export default createStore(reducers, {}, applyMiddleware(...middlwares))
