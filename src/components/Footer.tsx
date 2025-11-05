import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  return <footer role="contentinfo" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img src={logo} alt="Green Smile" className="h-16 w-auto brightness-0 invert" />
            <p className="text-sm opacity-90">
              Cuidando do seu sorriso com excelência, tecnologia e carinho. Sua saúde bucal é nossa prioridade.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contato</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:+5511970604418" className="flex items-start gap-2 hover:opacity-80 transition-opacity" aria-label="Ligar para (11) 97060-4418">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>(11) 97060-4418</span>
              </a>
              <a href="mailto:greensmile_odonto@hotmail.com" className="flex items-start gap-2 hover:opacity-80 transition-opacity" aria-label="Enviar email para greensmile_odonto@hotmail.com">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>matrixgreen@hotmail.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <address className="not-italic">
                  Av. Eng. Armando de Arruda Pereira, 2357<br />
                  Jabaquara, São Paulo - SP<br />
                  CEP: 04309-011
                </address>
              </div>
            </div>
          </div>

          {/* Hours and Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Horário de Atendimento</h3>
            <div className="text-sm space-y-1 opacity-90">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 13h</p>
              <p>Domingo: Fechado</p>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://instagram.com/greensmile_odonto" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Seguir no Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/61582121762981" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Seguir no Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Green Smile Clínica Odontológica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;