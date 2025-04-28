class PagesController < ApplicationController
  def home
    @contact = Contact.new
  end

  def mentions_legales
  end

  def politique_confidentialite
  end

end
