import axios from 'axios'

//INITIAL STATE
const initialState = []

//ACTION TYPE
export const GET_CHANNELS = 'GET_CHANNELS'

//ACTION CREATOR

export const getChannels = channels => {
  return {
    type: GET_CHANNELS,
    channels
  }
}

//THUNK CREATORS


//REDUCER

export default reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_CHANNELS:
      return {
        ... state, channels : action.channels
      }
    default:
      return state
  }
}