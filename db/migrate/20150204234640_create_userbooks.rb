class CreateUserbooks < ActiveRecord::Migration
  def change
    create_table :userbooks do |t|

      t.timestamps
    end
  end
end
