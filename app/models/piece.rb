class Piece
  include ActiveModel::Model
  attr_accessor :id, :name, :description, :price, :currency, :image_url, :type
end
