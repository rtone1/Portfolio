class MessagesController < ApplicationController

  def createapi
    Message.create(message_params)
    redirect_to "/"
  end

  def destroy
    authenticate!
    Message.destroy(params[:id])
    redirect_to "/profile"
  end

  private

  def message_params

      params.require(:message).permit(:name, :email, :phone, :message)

  end

end
