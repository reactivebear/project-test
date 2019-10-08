import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import ui from './ui.js'
import user from './user.js'

const reducer = combineReducers({
  routing: routerReducer,
  ui,
  user,
})

export default reducer