# app/mailers/contact_mailer.rb
class ContactMailer < ApplicationMailer
  default to: "lorenzo.granjon@hotmail.com" # ou une autre adresse

  def send_contact_email
    @contact = params[:contact]

    mail(
      from: @contact.email,
      subject: "Nouveau message via le site"
    )
  end
end
