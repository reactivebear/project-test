import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store, { history } from './store'
import { Router } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    	<App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
