class Userwantedbook < ActiveRecord::Base
	belongs_to :user
	belongs_to :wantedbook
end
