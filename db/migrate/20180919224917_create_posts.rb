class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :description
      t.string :post_time
      t.string :category
      t.string :author
      t.boolean :featured

      t.timestamps
    end
  end
end
