# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  full_name       :string
#  display_name    :string           not null
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, presence: true

  has_many :messages,
    foreign_key: :author_id,
    class_name: :Message

  has_many :owned_rooms,
    foreign_key: :owner_id,
    class_name: :Room
end
