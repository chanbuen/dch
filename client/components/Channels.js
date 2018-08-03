import React from 'react' 

export default function Channels ({ channels, messages }) {

    return(
      <div className="channels-parent">
        <div className="channels-sub-parent">
        {
          channels.map(channel => {
          return (
            <div key={channel.id} className="channels-child" onClick={}>
              <div className="channels-name">{channel.name}</div>
              <div className="channels-count">
                {/* {
                  messages.reduce(message => {
                    message.channelId === channel.id ? prev+1 : 0
                  }, 0)
                } */}
              </div>
            </div>
          )
        })
        }
        </div>
      </div>
    )
}


