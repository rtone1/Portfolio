class CreationsController < ApplicationController

  def index
    creates = Creation.all
    @creates = creates.where(category: "code")
    designs = Creation.all
    @designs = designs.where(category: "design")
  end

  def workapi
    works = Creation.all
    render json: works
  end

  def createcreationapi
    authenticate!
    @create = Creation.create(creation_params)
    redirect_to "/profile"
  end


  private

  def creation_params

    params.require(:creation).permit(:category, :title, :linkgithub, :description, :image)

  end


end
