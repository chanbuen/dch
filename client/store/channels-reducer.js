import axios from 'axios'

//INITIAL STATE
const initialState = []

//ACTION TYPE
export const GET_CHANNELS = 'GET_CHANNELS'
export const GET_CHANNELS_COMPLETE = 'GET_CHANNELS_COMPLETE'

//ACTION CREATOR

export const getChannels = channels => {
  return {
    type: GET_CHANNELS,
    channels
  }
}

export const getChannelsComplete = status => {
  return {
    type: GET_CHANNELS_COMPLETE,
    status
  }
}

//THUNK CREATORS

export const fetchChannels = () => 
  dispatch => 
    axios.get('api/channels')
      .then(res => res.data)
      .then(channelNames => dispatch(getChannels(channelNames)))
      .then((done) => dispatch(getChannelsComplete(true)))
      .catch(err => console.error(`Unable to retrieve channel names. ${err}`))

//REDUCER

const channelReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_CHANNELS:
      return action.channels
    default:
      return state
  } 
}

export const channelStatus = (state = false, action) => {
  switch(action.type){
    case GET_CHANNELS_COMPLETE:
      return action.status
    default:
      return state
  }
}

export default channelReducer