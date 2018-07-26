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

const channelReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state)
  switch(action.type){
    case GET_CHANNELS:
      return { newState, channels : action.channels }
    default:
      return state
  } 
}

export default channelReducer