class Wantedbook < ActiveRecord::Base
	has_many :userwantedbooks
	has_many :users, :through => :userwantedbooks
end
