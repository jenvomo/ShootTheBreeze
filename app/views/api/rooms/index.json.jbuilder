@rooms.each do |room|
  json.set! room.id do
    json.extract! room, :title, :owner_id
  end
end