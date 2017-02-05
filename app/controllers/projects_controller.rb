class ProjectsController < ApplicationController
  def index
    @pieces = (1..10).map do |i|
      Piece.new({
        id: i,
        name: "project #{i}",
        description: "This is a test project #{i}",
        price: i * 10,
        currency: "EUR",
        type: "project",
        image_url: "https://unsplash.it/200",
      })
    end
    render index: @pieces
  end
end
