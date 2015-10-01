class Item < ActiveRecord::Base
  validates :task, presence: true
end

