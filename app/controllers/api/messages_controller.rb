class Api::MessagesController < ApplicationController
  def create
    message = Message.new(message_params)
    room = Room.find(message_params[:room_id])

    if message.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        MessageSerializer.new(message)
      ).serialized_hash
      MessageChannel.broadcast_to room, serialized_data
      head :ok
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :author_id, :room_id)
  end
end
