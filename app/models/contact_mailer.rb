class ContactMailer < ApplicationMailer
  default to: "lorenzo.granjon@hotmail.com" # remplace par ton adresse si besoin

  def send_contact_email
    @contact = params[:contact]

    mail(
      from: @contact.email,
      subject: "Nouveau message via le site"
    )
  end
end
