class Api::RoomsController < ApplicationController
  def index
    @rooms = Room.all
    render json: :index
  end

  def create
    room = Room.new(room_params)
    if room.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        RoomSerializer.new(room)
      ).serializable_hash
      ActionCable.server.broadcast 'rooms_channel', serializable_data
      head :ok
    end
  end

  private
  def room_params
    params.require(:room).permit(:title, :owner_id)
  end
end
