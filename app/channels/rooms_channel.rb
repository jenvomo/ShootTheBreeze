class RoomsChannel < ApplicationCable::Channel
  def subscribed
    # debugger
    @room = Room.find_by(id: params[:id])
    stream_for @room
  end

  def speak(data)
    debugger
    @room = Room.find_by(id: params[:id])
    Room.broadcast_to(@room, {room: @room, messages: @room.messages}
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
