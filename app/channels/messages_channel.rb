class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # debugger
    @room = Room.find_by(id: params[:id])
    stream_for @room
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
