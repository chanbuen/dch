import axios from 'axios'

//INITIAL STATE
const initialState = []

//ACTION TYPE
export const GET_MESSAGES = 'GET_MESSAGES'
export const GET_MESSAGES_COMPLETE = 'GET_MESSAGES_COMPLETE'

//ACTION CREATOR

export const getMessages = messages => {
  return {
    type: GET_MESSAGES,
    messages
  }
}

export const getMessagesComplete = status => {
  return {
    type: GET_MESSAGES_COMPLETE,
    status
  }
}

//THUNK CREATORS

export const fetchMessages = () => 
  dispatch => 
    axios.get('api/messages')
      .then(res => res.data)
      .then(messages => dispatch(getMessages(messages)))
      .then(completed => dispatch(getMessagesComplete(true)))
      .catch(err => console.error(`Unable to retrieve messages. ${err}`))

//REDUCER

const messageReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_MESSAGES:
      return action.messages
    default:
      return state
  } 
}

export const messageStatus = (state = false, action) => {
  switch(action.type){
    case GET_MESSAGES_COMPLETE:
      return action.status
    default:
      return state
  }
}

export default messageReducer