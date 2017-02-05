class ProjectsController < ApplicationController
  def index
    @pieces = [ Piece.new(
      {
        id: 1,
        name: "project 1",
        description: "This is a test project",
        price: 10,
        currency: "EUR",
        type: "project",
        image_url: "https://unsplash.it/200",
      }),
      Piece.new({
        id: 2,
        name: "project 2",
        description: "This is a test project",
        price: 20,
        currency: "EUR",
        type: "project",
        image_url: "https://unsplash.it/200",
      }),
    ]
    render index: @pieces
  end
end
