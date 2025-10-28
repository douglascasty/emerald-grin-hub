import { MessageCircle } from "lucide-react";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/5511970604418?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#25D366]/50 hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Abrir chat no WhatsApp"
      data-gtm="whatsapp-button"
    >
      <MessageCircle className="group-hover:rotate-12 transition-transform duration-300" size={28} />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full animate-pulse shadow-lg" />
    </a>
  );
};

export default WhatsappButton;
