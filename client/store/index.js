import channels, { channelStatus } from './channels-reducer'
import messages, { messageStatus } from './messages-reducer'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(combineReducers({channels, channelStatus, messages, messageStatus}),  
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    loggingMiddleware
    )
  )
)

export default store
export * from './channels-reducer'
export * from './messages-reducer'