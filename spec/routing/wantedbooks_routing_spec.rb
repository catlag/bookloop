require "rails_helper"

RSpec.describe WantedbooksController, :type => :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/wantedbooks").to route_to("wantedbooks#index")
    end

    it "routes to #new" do
      expect(:get => "/wantedbooks/new").to route_to("wantedbooks#new")
    end

    it "routes to #show" do
      expect(:get => "/wantedbooks/1").to route_to("wantedbooks#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/wantedbooks/1/edit").to route_to("wantedbooks#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/wantedbooks").to route_to("wantedbooks#create")
    end

    it "routes to #update" do
      expect(:put => "/wantedbooks/1").to route_to("wantedbooks#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/wantedbooks/1").to route_to("wantedbooks#destroy", :id => "1")
    end

  end
end
