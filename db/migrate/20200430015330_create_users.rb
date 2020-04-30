class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email
      t.string :full_name
      t.string :display_name
      t.string :password_digest
      t.string :session_token

      t.timestamps
    end
  end
end
