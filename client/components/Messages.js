import React, { Component } from 'react' 
import { fetchMessages } from '../store/messages-reducer'
import { connect } from 'react-redux'

class Messages extends Component {
  constructor(props){
    super(props)
    // this.state = {

    // }
  }
  
  componentDidMount(){
    this.props.retrieveMessages()
    
  }

  render(){
    return(
      <div className="Messages-parent">
        <div className="Messages-sub-parent">
        {
          this.props.Messages.map(message => {
          return (
            <div key={message.id} className="Messages-child">
              <div className="Messages-name">{message.name}</div>
              <div className="Messages-count">5</div>
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
    messages : state.Messages,
    channelId : state.channelId
  }
}
const mapDispatch = dispatch => {
  return {
    retrieveMessages() {
      dispatch(fetchMessages())
    }
  }
}

export default connect(mapState, mapDispatch)(Messages)