import React, { useEffect, useState } from 'react';
import MessageIndex from "../messages/MessageIndex";
import MessageForm from '../messages/MessageForm';

function RoomShow(props) {
  useEffect(() => {
    props.fetchRoom(props.match.params.roomId);
  }, [])
  
  return (
    <div>{props.room ? props.room.title : ""}
      <MessageIndex messages={props.messages} />
      <MessageForm 
        roomId={props.match.params.roomId}
        receiveMessage={props.receiveMessage} />
    </div>
  )
}

export default RoomShow;