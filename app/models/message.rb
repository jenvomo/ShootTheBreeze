# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  room_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :body, presence: true
  validates :author_id, presence: true
  validates :room_id, presence: true
  
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :room
end
