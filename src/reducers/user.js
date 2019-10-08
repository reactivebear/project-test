import * as types from '../actions/types'
import Cookies from 'js-cookie'

const initialState = {
  token: Cookies.get('token'),
  loaded: false,
  data: {},
  userId: Cookies.get('user_id'),
}

const user = (user = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_TOKEN:
      return Object.assign({}, user, {
        token: action.token
      })
    case types.SET_USER_KEY:
      return Object.assign({}, user, {
        [action.key]: action.data
      })
    case types.SET_USER:
      return Object.assign({}, user, {
        data: action.data,
      })
    case types.SET_USER_LOADED:
      return Object.assign({}, user, {
        loaded: action.value,
      })
    case types.CLEAR_STATE:
      return Object.assign({}, user, {...initialState, token: '', userId: ''})
    default:
      return user
  }
}

export default user