class CreateWantedbooks < ActiveRecord::Migration
  def change
    create_table :wantedbooks do |t|
      t.string :title
      t.string :author
      t.string :year
      t.string :condition
      t.string :ISBN

      t.timestamps
    end
  end
end
