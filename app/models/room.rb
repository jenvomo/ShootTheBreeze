# == Schema Information
#
# Table name: rooms
#
#  id         :bigint           not null, primary key
#  title      :string
#  owner_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Room < ApplicationRecord
  validates :owner_id, presence: true
  validates :title, presence: true

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many :messages
end
