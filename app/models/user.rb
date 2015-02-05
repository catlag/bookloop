class User < ActiveRecord::Base
	has_secure_password
	has_many :userbooks
	has_many :books, :through => :userbooks

	has_many :userwantedbooks
	has_many :wantedbooks, :through => :userwantedbooks
end
