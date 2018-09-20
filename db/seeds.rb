categories = ['Games', 'Health & Fitness', 'Business', 'Lifestyle', 'Entertainment', 'Sports']
featured = [true, false]
100.times do
  Post.create(
    description: Faker::Lorem.paragraph,
    category: categories.sample,
    author: Faker::App.author,
    featured: featured.sample,
    post_time: "Just Now" 
  )
end