import React, { useEffect, useState } from "react";

const MessageForm = props => {
  useEffect(() => {
    App.cable.subscriptions.create(
      { channel: "RoomChannel" },
      {
        received: (message) => {
          debugger
          props.receiveMessage(message)
        },
        speak: function (data) {
          debugger
          return this.perform("speak", data)
        }
      })
  }, [])

  const [message, setMessage] = useState({ 
      body: "", 
      room_id: props.roomId, 
      author_id: 1 
    });

  function handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak({ message });
    setMessage({ ...message, body: "" });
  }

  function handleChange(field) {
    return (e) => {
      setMessage({ ...message, [field]: e.target.value })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="chat it up"
        value={message.body}
        onChange={handleChange("body")} />
    </form>
  )
}

export default MessageForm;