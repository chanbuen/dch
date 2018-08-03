import React, { Component } from 'react'
import { fetchChannels, fetchMessages } from '../store'
import { Channels, Messages, Navbar } from './index.js'
import { connect } from 'react-redux'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      initialRequestHasCompleted : false, //change back to true when add component

    }
  }

  componentDidMount() {
    this.props.retrieveChannels()
    this.props.retrieveMessages()
  }

  // handleClick = (evt) => 
  //   evt.target.name

  render() {
    // if (!this.state.initialRequestHasCompleted) return (null);
    if (this.props.channelStatus === false) return (null)
    const { channels, messages, channelStatus, messageStatus} = this.props
    return (
      <div>
        <Navbar />
        <Channels channels={channels} />
        <Messages />
      </div>
    )
  }
}

const mapState = (state, ownProps) => {
  return {
    channelStatus : state.channelStatus,
    messageStatus : state.messageStatus,
    channels : state.channels,
    messages : state.messages
  }
}
const mapDispatch = dispatch => {
  return {
    retrieveChannels() {
      dispatch(fetchChannels())
    },
    retrieveMessages() {
      dispatch(fetchMessages())
    }
  }
}


export default connect(mapState, mapDispatch)(Main)