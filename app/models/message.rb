class Message < ActiveRecord::Base

  def to_s
    @messages.name + " sent a message."
  end

end
