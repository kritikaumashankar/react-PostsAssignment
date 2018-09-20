require "time"
require 'action_view'
require 'action_view/helpers'
include ActionView::Helpers::DateHelper
class Post < ApplicationRecord

  attr_accessor :upated_at_was

  def update_post_time
    return distance_of_time_in_words(Time.now- Time.at(self.updated_at_was)) + ' ago'
  end
end
