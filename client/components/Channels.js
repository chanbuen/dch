import React, { Component } from 'react' 
import { fetchChannels } from '../store/channels'
import { connect } from 'react-redux'

class Channels extends Component {
  constructor(props){
    super(props)
    // this.state = {

    // }
  }
  
  componentDidMount(){
    this.props.retrieveChannels()
    
  }

  render(){
    return(
      <div className="channels-parent">
        <div className="channels-sub-parent">
        {
          this.props.channels.map(channel => {
          return (
            <div key={channel.id} className="channels-child">
              <div className="channels-name">{channel.name}</div>
              <div className="channels-count">5</div>
            </div>
          )
        })
        }
        </div>
      </div>
    )
  }
}

const mapState = (state, ownProps) => {
  return {
    channels : state.channels
  }
}
const mapDispatch = dispatch => {
  return {
    retrieveChannels() {
      dispatch(fetchChannels())
    }
  }
}

export default connect(mapState, mapDispatch)(Channels)