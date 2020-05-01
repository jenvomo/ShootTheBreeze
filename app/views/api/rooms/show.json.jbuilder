json.set! "room" do
  json.extract! @room, :title, :owner_id
end

json.set! "messages" do
  @room.messages.each do |message|
    json.set! message.id do
      json.extract! message, :id, :body, :author_id, :created_at
    end
  end
end
