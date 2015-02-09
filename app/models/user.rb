class User < ActiveRecord::Base
	has_secure_password
  validates :password, length: { within: 6..40 }
	has_many :userbooks
	has_many :books, :through => :userbooks

	has_many :userwantedbooks
	has_many :wantedbooks, :through => :userwantedbooks

  # validates :email
end
