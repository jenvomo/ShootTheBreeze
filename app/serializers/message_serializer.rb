class MessageSerializer < ActiveModel::Serializer
  attributes :id, :room_id, :body, :created_at
end
