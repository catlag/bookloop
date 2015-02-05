class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :year
      t.string :condition
      t.string :ISBN

      t.timestamps
    end
  end
end
