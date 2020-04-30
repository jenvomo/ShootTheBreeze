class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :room_id, null: false

      t.timestamps
    end

    add_index :messages, :author_id
    add_index :messages, :room_id
  end
end
