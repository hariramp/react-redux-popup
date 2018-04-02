import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = window.opener == null ? createStore(reducer) : window.opener.store;
window.store = store;

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
)