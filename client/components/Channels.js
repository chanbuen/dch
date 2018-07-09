import React, { Component } from 'react' 

export default class Channels extends Component {
  constructor(props){
    this.state = {

    }
  }
  
  componentDidMount(){
    axios.get('api/channels')
    //need to finish 
      // .then(channels => )
  }

  render(){
    return(
      <div></div>
    )
  }
}
