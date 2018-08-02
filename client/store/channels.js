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

export const fetchChannels = () => 
  dispatch => 
    axios.get('api/channels')
      .then(res => res.data)
      .then(channelNames => dispatch(getChannels(channelNames)))
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

export default channelReducer