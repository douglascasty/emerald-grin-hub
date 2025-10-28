import { Sparkles, Smile, Zap, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Sparkles,
    title: "Implantes Dentários",
    description: "Recupere seu sorriso com implantes de última geração. Procedimento seguro e resultado natural.",
    features: ["Implante unitário", "Prótese fixa sobre implantes", "Carga imediata"],
  },
  {
    icon: Smile,
    title: "Ortodontia",
    description: "Alinhamento dental com aparelhos tradicionais ou estéticos. Acompanhamento personalizado.",
    features: ["Aparelho metálico", "Aparelho estético", "Alinhadores invisíveis"],
  },
  {
    icon: Zap,
    title: "Estética Dental",
    description: "Transforme seu sorriso com procedimentos estéticos avançados e resultados naturais.",
    features: ["Clareamento dental", "Lentes de contato", "Facetas de porcelana"],
  },
  {
    icon: Shield,
    title: "Odontologia Geral",
    description: "Cuidados preventivos e tratamentos completos para manter sua saúde bucal em dia.",
    features: ["Limpeza e prevenção", "Restaurações", "Tratamento de canal"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Oferecemos tratamentos completos para cuidar do seu sorriso com excelência e tecnologia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Saiba mais
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
