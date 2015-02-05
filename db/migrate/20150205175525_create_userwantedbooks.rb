class CreateUserwantedbooks < ActiveRecord::Migration
  def change
    create_table :userwantedbooks do |t|

      t.timestamps
    end
  end
end
