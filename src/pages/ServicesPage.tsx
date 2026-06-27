import { Helmet } from "react-helmet-async";
import { Sparkles, Smile, Zap, Shield, Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const servicesDetailed = [
  {
    icon: Sparkles,
    title: "Implantes Dentários",
    description: "Recupere a função e estética dos seus dentes com implantes de última geração",
    benefits: [
      "Resultado natural e duradouro",
      "Procedimento minimamente invasivo",
      "Carga imediata em casos selecionados",
      "Acompanhamento pós-operatório completo",
    ],
    price: "A partir de R$ 1.200",
  },
  {
    icon: Smile,
    title: "Ortodontia",
    description: "Alinhamento dental com as melhores técnicas do mercado",
    benefits: [
      "Aparelhos estéticos e metálicos",
      "Alinhadores invisíveis",
      "Plano de tratamento personalizado",
      "Consultas mensais de acompanhamento",
    ],
    price: "A partir de R$ 800/mês",
  },
  {
    icon: Zap,
    title: "Estética Dental",
    description: "Transforme seu sorriso com procedimentos modernos e seguros",
    benefits: [
      "Clareamento dental profissional",
      "Lentes de contato dentais",
      "Facetas de porcelana",
      "Harmonização do sorriso",
    ],
    price: "A partir de R$ 500",
  },
  {
    icon: Shield,
    title: "Odontologia Geral",
    description: "Cuidados preventivos e curativos para toda a família",
    benefits: [
      "Limpeza e profilaxia",
      "Restaurações estéticas",
      "Tratamento de canal",
      "Urgências odontológicas",
    ],
    price: "Consulta: R$ 150",
  },
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Nossos Serviços - Green Smile Clínica Odontológica</title>
        <meta
          name="description"
          content="Conheça nossos serviços: implantes dentários, ortodontia, estética dental e odontologia geral. Tecnologia de ponta e atendimento humanizado."
        />
        <link rel="canonical" href={`${window.location.origin}/servicos`} />
        
        <meta property="og:title" content="Nossos Serviços - Green Smile" />
        <meta property="og:description" content="Implantes, ortodontia, estética dental e mais" />
        <meta property="og:url" content={`${window.location.origin}/servicos`} />
      </Helmet>

      <main role="main" className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">
              Nossos <span className="text-primary">Serviços</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Oferecemos uma gama completa de tratamentos odontológicos com tecnologia de ponta e atendimento humanizado
            </p>
          </div>

          <section aria-labelledby="services-list-heading">
            <h2 id="services-list-heading" className="sr-only">Lista de Serviços Odontológicos</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {servicesDetailed.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4">
                      <Icon size={32} className="text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground mb-4">Investimento: <span className="text-primary font-bold">{service.price}</span></p>
                      <Button
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="w-full bg-gradient-to-r from-primary to-primary-light"
                      >
                        Agendar Consulta
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default ServicesPage;
