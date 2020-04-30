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

require 'test_helper'

class RoomTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
