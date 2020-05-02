class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'room_channel'
  end

  def speak(data)
    message = Message.new(data['message'])
    if message.save
      data = {
        id: message.id,
        body: message.body,
        roomId: message.room_id,
        author_id: message.author_id,
        created_at: message.created_at
      }
      debugger
      RoomChannel.broadcast_to('room_channel', data )
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
