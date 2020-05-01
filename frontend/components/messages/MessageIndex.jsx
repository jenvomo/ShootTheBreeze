import React from 'react';

const MessageIndex = props => {

  return (
    <div>
      <ul>
        {props.messages.map(message => (
          <li key={message.id}>{message.body}</li>
        ))}
      </ul>
    </div>
  )
}

export default MessageIndex;