import { MessageCircle } from "lucide-react";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/5511970604418?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform animate-float"
      aria-label="Abrir chat no WhatsApp"
      data-gtm="whatsapp-button"
    >
      <MessageCircle size={28} />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full animate-pulse" />
    </a>
  );
};

export default WhatsappButton;
