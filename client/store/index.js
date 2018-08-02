import channels from './channels'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(combineReducers({channels}),  
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    loggingMiddleware
    )
  )
)

export default store
export * from './channels'