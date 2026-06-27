import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contato - Green Smile Clínica Odontológica</title>
        <meta
          name="description"
          content="Fale com a Green Smile em São Paulo. Agende pelo (11) 97060-4418 ou pelo formulário. Av. Eng. Armando de Arruda Pereira, Jabaquara."
        />
        <link rel="canonical" href={`${window.location.origin}/contato`} />

        <meta property="og:title" content="Contato - Green Smile" />
        <meta property="og:description" content="Agende sua consulta conosco" />
        <meta property="og:url" content={`${window.location.origin}/contato`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Green Smile Clínica Odontológica",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Eng. Armando de Arruda Pereira, 2357",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            postalCode: "04309-011",
            addressCountry: "BR",
          },
          telephone: "+5511970604418",
          email: "greensmile_odonto@hotmail.com",
          url: "https://greensmileodonto.lovable.app/contato",
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
          ],
        })}</script>
      </Helmet>

      <main role="main" className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">
              Entre em <span className="text-primary">Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Estamos prontos para atender você. Entre em contato e agende sua consulta
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <section aria-labelledby="contact-info-heading" className="space-y-8 animate-fade-in">
              <h2 id="contact-info-heading" className="text-2xl md:text-3xl font-bold">Informações de Contato</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Endereço</h3>
                    <address className="not-italic text-muted-foreground">
                      Av. Eng. Armando de Arruda Pereira, 2357<br />
                      Jabaquara, São Paulo - SP<br />
                      CEP: 04309-011
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Telefone</h3>
                    <a
                      href="tel:+5511970604418"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (11) 97060-4418
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">E-mail</h3>
                    <a
                      href="mailto:greensmile_odonto@hotmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      greensmile_odonto@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Horário de Atendimento</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 13h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-video rounded-xl overflow-hidden border-2 border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.8859392746935!2d-46.62438212503803!3d-23.617099378765597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a7395c48d7b%3A0x7a4e4e1e5e5e5e5e!2sAv.%20Eng.%20Armando%20de%20Arruda%20Pereira%2C%202357%20-%20Jabaquara%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004309-011!5e0!3m2!1spt-BR!2sbr!4v1640000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Green Smile no Google Maps"
                />
              </div>
            </section>

            {/* Contact Form */}
            <section aria-labelledby="contact-form-heading" className="animate-fade-in-up">
              <h2 id="contact-form-heading" className="text-2xl md:text-3xl font-bold mb-6">Envie uma Mensagem</h2>
              <ContactForm />
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
