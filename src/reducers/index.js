import {combineReducers} from 'redux'

import auth from './AuthReducer'
import catalogues from './CatalogueReducer'

export default combineReducers({
  auth,
  catalogues
})
