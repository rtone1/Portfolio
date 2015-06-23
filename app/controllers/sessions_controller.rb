class SessionsController < ApplicationController

  def log_in_behavior
    user = User.find_by(name: params[:name])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/profile'
    else
      redirect_to '/'
    end
  end

  def log_out_behavior
    session[:user_id] = nil
    redirect_to '/'
  end


end
