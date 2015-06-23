class User < ActiveRecord::Base
  has_secure_password

  def to_s
    @user.name + " is admin user."
  end

end
