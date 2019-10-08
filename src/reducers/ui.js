import * as types from '../actions/types'

const initialState = {
  onRequest: false,
}

const ui = (ui = initialState, action = {}) => {
  switch (action.type) {
    case types.TOGGLE_MODAL:
      return Object.assign({}, ui, {
        modal: action.data,
      })
    case types.CLOSE_MODAL:
      return Object.assign({}, ui, {
        modal: {...ui.modal, show: false},
      })
    default:
      return ui
  }
}

export default ui