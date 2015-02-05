require 'rails_helper'

RSpec.describe "Wantedbooks", :type => :request do
  describe "GET /wantedbooks" do
    it "works! (now write some real specs)" do
      get wantedbooks_path
      expect(response).to have_http_status(200)
    end
  end
end
